import Exchange from './abstract/coinbaseexchange.js';
import type { Int, OrderSide, OrderType, Trade, OHLCV, Order, Balances, Str, Transaction, Ticker, OrderBook, Tickers, Strings, Market, Currency, Num, Account, Currencies, TradingFees, Dict, int, LedgerEntry } from './base/types.js';
/**
 * @class coinbaseexchange
 * @augments Exchange
 */
export default class coinbaseexchange extends Exchange {
    describe(): any;
    fetchCurrencies(params?: {}): Promise<Currencies>;
    fetchMarkets(params?: {}): Promise<Market[]>;
    fetchAccounts(params?: {}): Promise<Account[]>;
    parseAccount(account: any): {
        id: string;
        type: any;
        code: string;
        info: any;
    };
    parseBalance(response: any): Balances;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseTicker(ticker: Dict, market?: Market): Ticker;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTrade(trade: Dict, market?: Market): Trade;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTradingFees(params?: {}): Promise<TradingFees>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    fetchTime(params?: {}): Promise<number>;
    parseOrderStatus(status: Str): string;
    parseOrder(order: Dict, market?: Market): Order;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOrderTrades(id: string, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    fetchPaymentMethods(params?: {}): Promise<any>;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: Dict, currency?: Currency): LedgerEntry;
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<LedgerEntry[]>;
    fetchDepositsWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransactionStatus(transaction: any): "canceled" | "pending" | "ok" | "failed";
    parseTransaction(transaction: Dict, currency?: Currency): Transaction;
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: string;
        tag: string;
        info: any;
    }>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: int, reason: string, url: string, method: string, headers: Dict, body: string, response: any, requestHeaders: any, requestBody: any): any;
    request(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any, config?: {}): Promise<any>;
}
