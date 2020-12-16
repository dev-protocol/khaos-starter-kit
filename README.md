# Khaos Starter Kit

How to start developing Khaos Functions

## Environment

First, fork this repository.

Then clone the forked repository.

```bash
git clone git@github.com:your/khaos-starter-kit.git
cd khaos-starter-kit
```

You also need **IPFS** to deploy the functions. Please refer to [the documentation](https://docs.ipfs.io/install/command-line/#package-managers) and install the ipfs client for your environment.

## Development

Edit the file in the `src` directory. You have to edit the following files:

- src/abi.ts
- src/addresses.ts
- src/authorize.ts
- src/oraclize.ts

And update the tests.

You can add or remove dependencies if you want.

## Deployment

When the function is ready, build the source code with the following command.

```bash
yarn build
```

A subdirectory named `bundled` is added to this directory, and `bundled/index.js` is generated.

Add the `bundled` directory to IPFS.

```bash
ipfs add -r bundled

> added [IPFS_HASH_FOR_FILE] bundled/index.js
> added [IPFS_HASH_FOR_DIRECTORY] bundled
```

Your function has been deployed!

Submit `IPFS_HASH_FOR_DIRECTORY` to the Khaos Registry.
