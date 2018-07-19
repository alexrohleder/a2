export interface UserProfile {
  name: string | null;
  surname: string | null;
  wantsMarketing: boolean | null;
}

export interface UserInfo extends UserProfile {
  isNewUser: boolean | null;
  isLoggedInWithPassword: boolean | null;
  isEmailVerified: boolean | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  providerId: string | null;
  uid: string | null;
}

export interface State extends UserInfo {
  errorCode: string | null;
  errorMessage: string | null;
  attempts: number;
}

export const baseState: State = {
  isNewUser: null,
  isLoggedInWithPassword: null,
  isEmailVerified: null,
  displayName: null,
  email: null,
  photoURL: null,
  providerId: null,
  uid: null,
  name: null,
  surname: null,
  wantsMarketing: null,
  errorCode: null,
  errorMessage: null,
  attempts: 0,
};

export default { ...baseState };
