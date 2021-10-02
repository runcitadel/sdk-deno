import {
  Channel,
  PendingChannelsResponse_WaitingCloseChannel,
  PendingChannelsResponse_ForceClosedChannel,
  PendingChannelsResponse_PendingOpenChannel,
  EstimateFeeResponse,
} from "../autogenerated-types";

export type Channel_extended = Channel & {
  type?: string;
};

export type WaitingCloseChannel_extended =
  PendingChannelsResponse_WaitingCloseChannel & {
    type?: string;
  };

export type PendingForceClosedChannel_extended =
  PendingChannelsResponse_ForceClosedChannel & {
    type?: string;
  };

export type PendingOpenChannel_extended =
  PendingChannelsResponse_PendingOpenChannel & {
    type?: string;
    initiator?: boolean;
  };

  export type EstimateFeeResponseExtended = EstimateFeeResponse & {
  sweepAmount?: number;
};

import { ApiConnection } from "platform/connection.js";

export class LNDChannel extends ApiConnection {
  constructor(baseUrl: string) {
    super(`${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}channel`);
  }

  public set jwt(newJwt: string) {
    this._jwt = newJwt;
  }

  public async list(): Promise<Channel_extended[]> {
    return (await this.get("")) as Channel_extended[];
  }

  public async estimateFee(
    amt: number | string,
    confTarget: number,
    sweep = false
  ): Promise<EstimateFeeResponseExtended> {
    if (confTarget <= 0)
      throw new TypeError("Confirmation target must be above 0");
    return (await this.get(
      `/estimateFee?amt=${amt}&confTarget=0&sweep=${sweep}`
    )) as EstimateFeeResponseExtended;
  }

  public async estimateFeeAll(
    amt: number | string,
    sweep = false
  ): Promise<{
    fast: EstimateFeeResponseExtended;
    slow: EstimateFeeResponseExtended;
    normal: EstimateFeeResponseExtended;
    cheapest: EstimateFeeResponseExtended;
  }> {
    return (await this.get(
      `/estimateFee?amt=${amt}&confTarget=0&sweep=${sweep}`
    )) as {
      fast: EstimateFeeResponseExtended;
      slow: EstimateFeeResponseExtended;
      normal: EstimateFeeResponseExtended;
      cheapest: EstimateFeeResponseExtended;
    };
  }
}
