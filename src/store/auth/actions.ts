import { ActionTree } from 'vuex';
import firebase from 'firebase/app';
import { Mutations } from './mutations';
import { State, UserProfile } from './state';

export enum Actions {
  SIGN_IN_WITH_FACEBOOK = 'auth/SIGN_IN_WITH_FACEBOOK',
  SIGN_IN_WITH_GOOGLE = 'auth/SIGN_IN_WITH_GOOGLE',
  SIGN_IN_WITH_EMAIL_AND_PASSWORD = 'auth/SIGN_IN_WITH_EMAIL_AND_PASSWORD',
  SIGN_UP_WITH_EMAIL_AND_PASSWORD = 'auth/SIGN_UP_WITH_EMAIL_AND_PASSWORD',
  SIGN_OUT = 'auth/SIGN_OUT',
  UPDATE_USER_PROFILE = 'auth/UPDATE_USER_PROFILE',
  LOAD_USER_PROFILE = 'auth/LOAD_USER_PROFILE',
  SEND_PASSWORD_RESET_EMAIL = 'auth/SEND_PASSWORD_RESET_EMAIL',
  CONFIRM_PASSWORD_RESET = 'auth/CONFIRM_PASSWORD_RESET',
}

const SignInWithFirebase = (context: any, action: Promise<any>) => {
  return action.then(async (credentials: firebase.auth.UserCredential) => {
    const additionalUserInfo: any = credentials.additionalUserInfo;
    const user: any = credentials.user;

    if (!additionalUserInfo || !user) {
      // there is no documentation about this scenario until now.
      // we are validating it based on ts types.
      throw new Error('undefined authentication error.');
    }

    const firestoreUserInfo = await firebase.firestore()
      .collection('users')
      .doc(user.uid)
      .get();

    context.commit({
      type: Mutations.SET_USER_INFO,
      isNewUser: Boolean(additionalUserInfo.isNewUser),
      isLoggedInWithPassword: additionalUserInfo.providerId === 'password',
      ...user,
      ...firestoreUserInfo.data(),
    });

    return credentials;
  }).catch((error: firebase.auth.Error) => {
    context.commit({
      type: Mutations.SET_AUTH_ERROR,
      ...error,
    });

    throw error;
  });
};

const registerOnFirestoreIfNeeded = (action: Promise<any>, payload = null) => {
  return action.then(async (credentials: firebase.auth.UserCredential) => {
    if (
      credentials.user &&
      credentials.additionalUserInfo &&
      credentials.additionalUserInfo.isNewUser
    ) {
      let profile: UserProfile | null = payload;

      if (credentials.additionalUserInfo.profile && !payload) {
        const providerProfile: { [key: string]: string } =
          credentials.additionalUserInfo.profile as any;

        switch (credentials.additionalUserInfo.providerId) {
          case 'google.com':
            profile = {
              name: providerProfile.given_name,
              surname: providerProfile.family_name,
              wantsMarketing: false,
            };

            break;
          case 'facebook.com':
            profile = {
              name: providerProfile.first_name,
              surname: providerProfile.last_name,
              wantsMarketing: false,
            };

            break;
          default:
            throw new Error(
              'unable to determine the user profile using provider ' +
              credentials.additionalUserInfo.providerId,
            );
        }
      }

      if (profile) {
        await firebase.firestore()
          .collection('users')
          .doc(credentials.user.uid)
          .set(profile);
      }
    }

    return credentials;
  });
};

const actions: ActionTree<State, any> = {
  [Actions.SIGN_IN_WITH_FACEBOOK](context) {
    return SignInWithFirebase(
      context,
      registerOnFirestoreIfNeeded(
        firebase.auth().signInWithPopup(
          new firebase.auth.FacebookAuthProvider(),
        ),
      ),
    );
  },
  [Actions.SIGN_IN_WITH_GOOGLE](context) {
    return SignInWithFirebase(
      context,
      registerOnFirestoreIfNeeded(
        firebase.auth().signInWithPopup(
          new firebase.auth.GoogleAuthProvider(),
        ),
      ),
    );
  },
  [Actions.SIGN_IN_WITH_EMAIL_AND_PASSWORD](context, { email, password }) {
    return SignInWithFirebase(
      context,
      firebase.auth().signInWithEmailAndPassword(email, password),
    );
  },
  [Actions.SIGN_UP_WITH_EMAIL_AND_PASSWORD](context, { email, password, ...profile }) {
    return SignInWithFirebase(
      context,
      registerOnFirestoreIfNeeded(
        firebase.auth().createUserWithEmailAndPassword(
          email,
          password,
        ),
        profile,
      ),
    );
  },
  [Actions.SIGN_OUT](context) {
    return firebase.auth().signOut().then(() => {
      context.commit({
        type: Mutations.UNSET_USER_INFO,
      });
    });
  },
  [Actions.UPDATE_USER_PROFILE](context, { uid, ...profile }) {
    return firebase.firestore()
      .collection('users')
      .doc(uid)
      .set(profile, { merge: true })
      .then(() => {
        context.commit({
          type: Mutations.UPDATE_USER_INFO,
          ...profile,
        });
      });
  },
  [Actions.LOAD_USER_PROFILE](context, user) {
    return firebase.firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        context.commit({
          type: Mutations.UPDATE_USER_INFO,
          isNewUser: false,
          ...user,
          ...documentSnapshot.data(),
        });
      });
  },

  // the subsequent actions don't trigger state mutations.
  // they are created as actions to serve as a wrapper for the firebase
  // methods, allowing vuex style listeners to future dispatches.

  [Actions.SEND_PASSWORD_RESET_EMAIL](context, { email }) {
    return firebase.auth().sendPasswordResetEmail(email);
  },
  [Actions.CONFIRM_PASSWORD_RESET](context, { oobCode, password }) {
    return firebase.auth().confirmPasswordReset(oobCode, password);
  },
};

export default actions;
