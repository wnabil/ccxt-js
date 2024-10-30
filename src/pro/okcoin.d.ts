import okcoinRest from '../okcoin.js';
import type { Int, Str, OrderBook, Order, Trade, Ticker, OHLCV, Balances } from '../base/types.js';
import Client from '../base/ws/Client.js';
export default class okcoin extends okcoinRest {
    describe(): any;
    subscribe(channel: any, symbol: any, params?: {}): Promise<any>;
    watchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    watchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    handleOrders(client: Client, message: any, subscription?: any): void;
    watchTicker(symbol: string, params?: {}): Promise<Ticker>;
    handleTrade(client: Client, message: any): any;
    handleTicker(client: Client, message: any): any;
    watchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    handleOHLCV(client: Client, message: any): void;
    watchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    handleDelta(bookside: any, delta: any): void;
    handleDeltas(bookside: any, deltas: any): void;
    handleOrderBookMessage(client: Client, message: any, orderbook: any): any;
    handleOrderBook(client: Client, message: any): any;
    authenticate(params?: {}): Promise<any>;
    watchBalance(params?: {}): Promise<Balances>;
    subscribeToUserAccount(negotiation: any, params?: {}): Promise<any>;
    handleBalance(client: Client, message: any): void;
    handleSubscriptionStatus(client: Client, message: any): any;
    handleAuthenticate(client: Client, message: any): any;
    ping(client: Client): string;
    handlePong(client: Client, message: any): any;
    handleErrorMessage(client: Client, message: any): any;
    handleMessage(client: Client, message: any): void;
}
