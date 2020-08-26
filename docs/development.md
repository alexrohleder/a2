# Setup and Development

- [Overview](#overview)

## Overview

The first steps to get started is to create your [Firebase app](firebase.md), clone this project and configure your [environment variables](environment.md).

```bash
# 0. check if you are running with node 10 (you can use NVM to manage versions https://github.com/nvm-sh/nvm)
node -v

# 1. clone the repository
git clone https://github.com/alex.rohleder/a2.git

# 2. enter the project folder
cd a2

# 3. configure your .env files (https://github.com/alex.rohleder/a2/tree/docs/environment.md)
vim .env.development

# 4. install dependencies
yarn

# 5. start the dev server or use the scripts (https://github.com/alex.rohleder/a2/tree/docs/scripts.md)
yarn serve
```
