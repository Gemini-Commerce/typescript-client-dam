import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AssetMetadata } from '../models/AssetMetadata';
import { AssetOriginTypes } from '../models/AssetOriginTypes';
import { BatchUploadAssetsRequestFiles } from '../models/BatchUploadAssetsRequestFiles';
import { DamAsset } from '../models/DamAsset';
import { DamAssetOrigin } from '../models/DamAssetOrigin';
import { DamAssetType } from '../models/DamAssetType';
import { DamBatchUploadAssetsRequest } from '../models/DamBatchUploadAssetsRequest';
import { DamBatchUploadAssetsResponse } from '../models/DamBatchUploadAssetsResponse';
import { DamCreateAssetRequest } from '../models/DamCreateAssetRequest';
import { DamGetAssetByCodeRequest } from '../models/DamGetAssetByCodeRequest';
import { DamListAssetsByCodesRequest } from '../models/DamListAssetsByCodesRequest';
import { DamListAssetsByCodesResponse } from '../models/DamListAssetsByCodesResponse';
import { DamListAssetsByIdsRequest } from '../models/DamListAssetsByIdsRequest';
import { DamListAssetsByIdsResponse } from '../models/DamListAssetsByIdsResponse';
import { DamListAssetsRequest } from '../models/DamListAssetsRequest';
import { DamListAssetsResponse } from '../models/DamListAssetsResponse';
import { DamUpdateAssetRequest } from '../models/DamUpdateAssetRequest';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';
import { UpdateAssetRequestPayload } from '../models/UpdateAssetRequestPayload';

import { ObservableBasicOperationsApi } from "./ObservableAPI";
import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";

export interface BasicOperationsApiBatchUploadAssetsRequest {
    /**
     * 
     * @type DamBatchUploadAssetsRequest
     * @memberof BasicOperationsApibatchUploadAssets
     */
    body: DamBatchUploadAssetsRequest
}

export interface BasicOperationsApiBatchUploadAssets0Request {
    /**
     * 
     * @type DamBatchUploadAssetsRequest
     * @memberof BasicOperationsApibatchUploadAssets_1
     */
    body: DamBatchUploadAssetsRequest
}

export interface BasicOperationsApiCreateAssetRequest {
    /**
     * 
     * @type DamCreateAssetRequest
     * @memberof BasicOperationsApicreateAsset
     */
    body: DamCreateAssetRequest
}

export interface BasicOperationsApiCreateAsset0Request {
    /**
     * 
     * @type DamCreateAssetRequest
     * @memberof BasicOperationsApicreateAsset_2
     */
    body: DamCreateAssetRequest
}

export interface BasicOperationsApiGetAssetByCodeRequest {
    /**
     * 
     * @type DamGetAssetByCodeRequest
     * @memberof BasicOperationsApigetAssetByCode
     */
    body: DamGetAssetByCodeRequest
}

export interface BasicOperationsApiGetAssetByCode0Request {
    /**
     * 
     * @type DamGetAssetByCodeRequest
     * @memberof BasicOperationsApigetAssetByCode_3
     */
    body: DamGetAssetByCodeRequest
}

export interface BasicOperationsApiListAssetsRequest {
    /**
     * 
     * @type DamListAssetsRequest
     * @memberof BasicOperationsApilistAssets
     */
    body: DamListAssetsRequest
}

export interface BasicOperationsApiListAssetsByCodesRequest {
    /**
     * 
     * @type DamListAssetsByCodesRequest
     * @memberof BasicOperationsApilistAssetsByCodes
     */
    body: DamListAssetsByCodesRequest
}

export interface BasicOperationsApiListAssetsByCodes0Request {
    /**
     * 
     * @type DamListAssetsByCodesRequest
     * @memberof BasicOperationsApilistAssetsByCodes_4
     */
    body: DamListAssetsByCodesRequest
}

export interface BasicOperationsApiListAssetsByIdsRequest {
    /**
     * 
     * @type DamListAssetsByIdsRequest
     * @memberof BasicOperationsApilistAssetsByIds
     */
    body: DamListAssetsByIdsRequest
}

export interface BasicOperationsApiListAssetsByIds0Request {
    /**
     * 
     * @type DamListAssetsByIdsRequest
     * @memberof BasicOperationsApilistAssetsByIds_5
     */
    body: DamListAssetsByIdsRequest
}

export interface BasicOperationsApiListAssets0Request {
    /**
     * 
     * @type DamListAssetsRequest
     * @memberof BasicOperationsApilistAssets_6
     */
    body: DamListAssetsRequest
}

export interface BasicOperationsApiUpdateAssetRequest {
    /**
     * 
     * @type DamUpdateAssetRequest
     * @memberof BasicOperationsApiupdateAsset
     */
    body: DamUpdateAssetRequest
}

export interface BasicOperationsApiUpdateAsset0Request {
    /**
     * 
     * @type DamUpdateAssetRequest
     * @memberof BasicOperationsApiupdateAsset_7
     */
    body: DamUpdateAssetRequest
}

export class ObjectBasicOperationsApi {
    private api: ObservableBasicOperationsApi

    public constructor(configuration: Configuration, requestFactory?: BasicOperationsApiRequestFactory, responseProcessor?: BasicOperationsApiResponseProcessor) {
        this.api = new ObservableBasicOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch Upload Assets
     * @param param the request object
     */
    public batchUploadAssetsWithHttpInfo(param: BasicOperationsApiBatchUploadAssetsRequest, options?: Configuration): Promise<HttpInfo<DamBatchUploadAssetsResponse>> {
        return this.api.batchUploadAssetsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Batch Upload Assets
     * @param param the request object
     */
    public batchUploadAssets(param: BasicOperationsApiBatchUploadAssetsRequest, options?: Configuration): Promise<DamBatchUploadAssetsResponse> {
        return this.api.batchUploadAssets(param.body,  options).toPromise();
    }

    /**
     * Batch Upload Assets
     * @param param the request object
     */
    public batchUploadAssets_1WithHttpInfo(param: BasicOperationsApiBatchUploadAssets0Request, options?: Configuration): Promise<HttpInfo<DamBatchUploadAssetsResponse>> {
        return this.api.batchUploadAssets_1WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Batch Upload Assets
     * @param param the request object
     */
    public batchUploadAssets_1(param: BasicOperationsApiBatchUploadAssets0Request, options?: Configuration): Promise<DamBatchUploadAssetsResponse> {
        return this.api.batchUploadAssets_1(param.body,  options).toPromise();
    }

    /**
     * Create Asset
     * @param param the request object
     */
    public createAssetWithHttpInfo(param: BasicOperationsApiCreateAssetRequest, options?: Configuration): Promise<HttpInfo<DamAsset>> {
        return this.api.createAssetWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Asset
     * @param param the request object
     */
    public createAsset(param: BasicOperationsApiCreateAssetRequest, options?: Configuration): Promise<DamAsset> {
        return this.api.createAsset(param.body,  options).toPromise();
    }

    /**
     * Create Asset
     * @param param the request object
     */
    public createAsset_2WithHttpInfo(param: BasicOperationsApiCreateAsset0Request, options?: Configuration): Promise<HttpInfo<DamAsset>> {
        return this.api.createAsset_2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Asset
     * @param param the request object
     */
    public createAsset_2(param: BasicOperationsApiCreateAsset0Request, options?: Configuration): Promise<DamAsset> {
        return this.api.createAsset_2(param.body,  options).toPromise();
    }

    /**
     * Get Asset By Code
     * @param param the request object
     */
    public getAssetByCodeWithHttpInfo(param: BasicOperationsApiGetAssetByCodeRequest, options?: Configuration): Promise<HttpInfo<DamAsset>> {
        return this.api.getAssetByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Asset By Code
     * @param param the request object
     */
    public getAssetByCode(param: BasicOperationsApiGetAssetByCodeRequest, options?: Configuration): Promise<DamAsset> {
        return this.api.getAssetByCode(param.body,  options).toPromise();
    }

    /**
     * Get Asset By Code
     * @param param the request object
     */
    public getAssetByCode_3WithHttpInfo(param: BasicOperationsApiGetAssetByCode0Request, options?: Configuration): Promise<HttpInfo<DamAsset>> {
        return this.api.getAssetByCode_3WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Asset By Code
     * @param param the request object
     */
    public getAssetByCode_3(param: BasicOperationsApiGetAssetByCode0Request, options?: Configuration): Promise<DamAsset> {
        return this.api.getAssetByCode_3(param.body,  options).toPromise();
    }

    /**
     * List Assets
     * @param param the request object
     */
    public listAssetsWithHttpInfo(param: BasicOperationsApiListAssetsRequest, options?: Configuration): Promise<HttpInfo<DamListAssetsResponse>> {
        return this.api.listAssetsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Assets
     * @param param the request object
     */
    public listAssets(param: BasicOperationsApiListAssetsRequest, options?: Configuration): Promise<DamListAssetsResponse> {
        return this.api.listAssets(param.body,  options).toPromise();
    }

    /**
     * List Assets By Codes
     * @param param the request object
     */
    public listAssetsByCodesWithHttpInfo(param: BasicOperationsApiListAssetsByCodesRequest, options?: Configuration): Promise<HttpInfo<DamListAssetsByCodesResponse>> {
        return this.api.listAssetsByCodesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Assets By Codes
     * @param param the request object
     */
    public listAssetsByCodes(param: BasicOperationsApiListAssetsByCodesRequest, options?: Configuration): Promise<DamListAssetsByCodesResponse> {
        return this.api.listAssetsByCodes(param.body,  options).toPromise();
    }

    /**
     * List Assets By Codes
     * @param param the request object
     */
    public listAssetsByCodes_4WithHttpInfo(param: BasicOperationsApiListAssetsByCodes0Request, options?: Configuration): Promise<HttpInfo<DamListAssetsByCodesResponse>> {
        return this.api.listAssetsByCodes_4WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Assets By Codes
     * @param param the request object
     */
    public listAssetsByCodes_4(param: BasicOperationsApiListAssetsByCodes0Request, options?: Configuration): Promise<DamListAssetsByCodesResponse> {
        return this.api.listAssetsByCodes_4(param.body,  options).toPromise();
    }

    /**
     * List Assets By Ids
     * @param param the request object
     */
    public listAssetsByIdsWithHttpInfo(param: BasicOperationsApiListAssetsByIdsRequest, options?: Configuration): Promise<HttpInfo<DamListAssetsByIdsResponse>> {
        return this.api.listAssetsByIdsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Assets By Ids
     * @param param the request object
     */
    public listAssetsByIds(param: BasicOperationsApiListAssetsByIdsRequest, options?: Configuration): Promise<DamListAssetsByIdsResponse> {
        return this.api.listAssetsByIds(param.body,  options).toPromise();
    }

    /**
     * List Assets By Ids
     * @param param the request object
     */
    public listAssetsByIds_5WithHttpInfo(param: BasicOperationsApiListAssetsByIds0Request, options?: Configuration): Promise<HttpInfo<DamListAssetsByIdsResponse>> {
        return this.api.listAssetsByIds_5WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Assets By Ids
     * @param param the request object
     */
    public listAssetsByIds_5(param: BasicOperationsApiListAssetsByIds0Request, options?: Configuration): Promise<DamListAssetsByIdsResponse> {
        return this.api.listAssetsByIds_5(param.body,  options).toPromise();
    }

    /**
     * List Assets
     * @param param the request object
     */
    public listAssets_6WithHttpInfo(param: BasicOperationsApiListAssets0Request, options?: Configuration): Promise<HttpInfo<DamListAssetsResponse>> {
        return this.api.listAssets_6WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Assets
     * @param param the request object
     */
    public listAssets_6(param: BasicOperationsApiListAssets0Request, options?: Configuration): Promise<DamListAssetsResponse> {
        return this.api.listAssets_6(param.body,  options).toPromise();
    }

    /**
     * Update Asset
     * @param param the request object
     */
    public updateAssetWithHttpInfo(param: BasicOperationsApiUpdateAssetRequest, options?: Configuration): Promise<HttpInfo<DamAsset>> {
        return this.api.updateAssetWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Asset
     * @param param the request object
     */
    public updateAsset(param: BasicOperationsApiUpdateAssetRequest, options?: Configuration): Promise<DamAsset> {
        return this.api.updateAsset(param.body,  options).toPromise();
    }

    /**
     * Update Asset
     * @param param the request object
     */
    public updateAsset_7WithHttpInfo(param: BasicOperationsApiUpdateAsset0Request, options?: Configuration): Promise<HttpInfo<DamAsset>> {
        return this.api.updateAsset_7WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Asset
     * @param param the request object
     */
    public updateAsset_7(param: BasicOperationsApiUpdateAsset0Request, options?: Configuration): Promise<DamAsset> {
        return this.api.updateAsset_7(param.body,  options).toPromise();
    }

}
