import config from '../refs.terrain.json'

export const contractAddress = (wallet) => config[wallet.network.name].game.contractAddresses.default