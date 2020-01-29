/* global */
// @flow

import { type EdgeCurrencyInfo } from 'edge-core-js/types'

import { imageServerUrl } from '../common/utils'
import { type EosSettings } from './eosTypes.js'

const otherSettings: EosSettings = {
  eosActivationServers: ['https://eos-pay-sf2.edgesecure.co'],
  // used for the following routines, is Hyperion v2:

  // getIncomingTransactions
  // `/v2/history/get_transfers?to=${acct}&symbol=${currencyCode}&skip=${skip}&limit=${limit}&sort=desc`

  // getOutgoingTransactions
  // `/v2/history/get_actions?transfer.from=${acct}&transfer.symbol=${currencyCode}&skip=${skip}&limit=${limit}&sort=desc`

  // getKeyAccounts
  // `${server}/v2/state/get_key_accounts?public_key=${params[0]}`

  eosHyperionNodes: [
    'https://mainnet.telosusa.io', // v2
    'https://telos.eosphere.io',
    'https://api-telos-21zephyr.maltablock.org',
    'https://hyperion.telos.eosdetroit.io'
  ],

  // used for eosjs fetch routines
  // getCurrencyBalance
  // getInfo
  // transaction
  eosNodes: [
    'https://api.telos.alohaeos.com',
    'https://telosapi.atticlab.net',
    'https://telos.caleos.io',
    'https://telos.cryptolions.io',
    'https://telos.cryptosuvi.io',
    'https://telos-bp.dmail.co',
    'https://telos.eos.barcelona',
    'https://telos.eosdublin.io',
    'https://telosapi.eosmetal.io',
    'https://telos.eosphere.io',
    'https://telos.eosrio.io',
    'https://api.telos.eostribe.io',
    'https://telos.eosvibes.io',
    'https://api.telos.africa',
    'https://telos.eossweden.eu',
    'https://api.mainnet.bp.teleology.world:8000',
    'https://api.telosarabia.net',
    'https://api.telosgermany.io',
    'https://api.telos.telosgreen.com',
    'https://api.telosmadrid.io',
    'https://api.eos.miami',
    'https://api.telosuk.io',
    'https://api.eosimpera.com',
    'https://telos.get-scatter.com'
  ]
}

const defaultSettings: any = {
  otherSettings
}

export const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'TLOS',
  displayName: 'Telos',
  pluginName: 'telos',
  // do we need plugin name?
  walletType: 'wallet:telos',
  eosTokenAccountName: 'eosio.token',

  defaultSettings,

  addressExplorer: 'https://telos.eosx.io/account/%s',
  transactionExplorer: 'https://telos.eosx.io/tx/%s?listView=traces',

  denominations: [
    // An array of Objects of the possible denominations for this currency
    {
      name: 'TLOS',
      multiplier: '10000',
      symbol: 'T'
    }
  ],
  symbolImage: `${imageServerUrl}/telos-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/telos-logo-solo-64.png`,
  metaTokens: []
}
