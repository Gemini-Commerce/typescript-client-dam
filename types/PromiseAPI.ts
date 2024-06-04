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
import { ObservableBasicOperationsApi } from './ObservableAPI';

import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";
export class PromiseBasicOperationsApi {
    private api: ObservableBasicOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicOperationsApiRequestFactory,
        responseProcessor?: BasicOperationsApiResponseProcessor
    ) {
        this.api = new ObservableBasicOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssetsWithHttpInfo(body: DamBatchUploadAssetsRequest, _options?: Configuration): Promise<HttpInfo<DamBatchUploadAssetsResponse>> {
        const result = this.api.batchUploadAssetsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssets(body: DamBatchUploadAssetsRequest, _options?: Configuration): Promise<DamBatchUploadAssetsResponse> {
        const result = this.api.batchUploadAssets(body, _options);
        return result.toPromise();
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssets_1WithHttpInfo(body: DamBatchUploadAssetsRequest, _options?: Configuration): Promise<HttpInfo<DamBatchUploadAssetsResponse>> {
        const result = this.api.batchUploadAssets_1WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssets_1(body: DamBatchUploadAssetsRequest, _options?: Configuration): Promise<DamBatchUploadAssetsResponse> {
        const result = this.api.batchUploadAssets_1(body, _options);
        return result.toPromise();
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAssetWithHttpInfo(body: DamCreateAssetRequest, _options?: Configuration): Promise<HttpInfo<DamAsset>> {
        const result = this.api.createAssetWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAsset(body: DamCreateAssetRequest, _options?: Configuration): Promise<DamAsset> {
        const result = this.api.createAsset(body, _options);
        return result.toPromise();
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAsset_2WithHttpInfo(body: DamCreateAssetRequest, _options?: Configuration): Promise<HttpInfo<DamAsset>> {
        const result = this.api.createAsset_2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAsset_2(body: DamCreateAssetRequest, _options?: Configuration): Promise<DamAsset> {
        const result = this.api.createAsset_2(body, _options);
        return result.toPromise();
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCodeWithHttpInfo(body: DamGetAssetByCodeRequest, _options?: Configuration): Promise<HttpInfo<DamAsset>> {
        const result = this.api.getAssetByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCode(body: DamGetAssetByCodeRequest, _options?: Configuration): Promise<DamAsset> {
        const result = this.api.getAssetByCode(body, _options);
        return result.toPromise();
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCode_3WithHttpInfo(body: DamGetAssetByCodeRequest, _options?: Configuration): Promise<HttpInfo<DamAsset>> {
        const result = this.api.getAssetByCode_3WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCode_3(body: DamGetAssetByCodeRequest, _options?: Configuration): Promise<DamAsset> {
        const result = this.api.getAssetByCode_3(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssetsWithHttpInfo(body: DamListAssetsRequest, _options?: Configuration): Promise<HttpInfo<DamListAssetsResponse>> {
        const result = this.api.listAssetsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssets(body: DamListAssetsRequest, _options?: Configuration): Promise<DamListAssetsResponse> {
        const result = this.api.listAssets(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodesWithHttpInfo(body: DamListAssetsByCodesRequest, _options?: Configuration): Promise<HttpInfo<DamListAssetsByCodesResponse>> {
        const result = this.api.listAssetsByCodesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodes(body: DamListAssetsByCodesRequest, _options?: Configuration): Promise<DamListAssetsByCodesResponse> {
        const result = this.api.listAssetsByCodes(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodes_4WithHttpInfo(body: DamListAssetsByCodesRequest, _options?: Configuration): Promise<HttpInfo<DamListAssetsByCodesResponse>> {
        const result = this.api.listAssetsByCodes_4WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodes_4(body: DamListAssetsByCodesRequest, _options?: Configuration): Promise<DamListAssetsByCodesResponse> {
        const result = this.api.listAssetsByCodes_4(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIdsWithHttpInfo(body: DamListAssetsByIdsRequest, _options?: Configuration): Promise<HttpInfo<DamListAssetsByIdsResponse>> {
        const result = this.api.listAssetsByIdsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIds(body: DamListAssetsByIdsRequest, _options?: Configuration): Promise<DamListAssetsByIdsResponse> {
        const result = this.api.listAssetsByIds(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIds_5WithHttpInfo(body: DamListAssetsByIdsRequest, _options?: Configuration): Promise<HttpInfo<DamListAssetsByIdsResponse>> {
        const result = this.api.listAssetsByIds_5WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIds_5(body: DamListAssetsByIdsRequest, _options?: Configuration): Promise<DamListAssetsByIdsResponse> {
        const result = this.api.listAssetsByIds_5(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssets_6WithHttpInfo(body: DamListAssetsRequest, _options?: Configuration): Promise<HttpInfo<DamListAssetsResponse>> {
        const result = this.api.listAssets_6WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssets_6(body: DamListAssetsRequest, _options?: Configuration): Promise<DamListAssetsResponse> {
        const result = this.api.listAssets_6(body, _options);
        return result.toPromise();
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAssetWithHttpInfo(body: DamUpdateAssetRequest, _options?: Configuration): Promise<HttpInfo<DamAsset>> {
        const result = this.api.updateAssetWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAsset(body: DamUpdateAssetRequest, _options?: Configuration): Promise<DamAsset> {
        const result = this.api.updateAsset(body, _options);
        return result.toPromise();
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAsset_7WithHttpInfo(body: DamUpdateAssetRequest, _options?: Configuration): Promise<HttpInfo<DamAsset>> {
        const result = this.api.updateAsset_7WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAsset_7(body: DamUpdateAssetRequest, _options?: Configuration): Promise<DamAsset> {
        const result = this.api.updateAsset_7(body, _options);
        return result.toPromise();
    }


}



