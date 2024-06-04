/* tslint:disable */
/* eslint-disable */
/**
 * Dam Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DamAsset,
  DamBatchUploadAssetsRequest,
  DamBatchUploadAssetsResponse,
  DamCreateAssetRequest,
  DamGetAssetByCodeRequest,
  DamListAssetsByCodesRequest,
  DamListAssetsByCodesResponse,
  DamListAssetsByIdsRequest,
  DamListAssetsByIdsResponse,
  DamListAssetsRequest,
  DamListAssetsResponse,
  DamUpdateAssetRequest,
  RpcStatus,
} from '../models/index';
import {
    DamAssetFromJSON,
    DamAssetToJSON,
    DamBatchUploadAssetsRequestFromJSON,
    DamBatchUploadAssetsRequestToJSON,
    DamBatchUploadAssetsResponseFromJSON,
    DamBatchUploadAssetsResponseToJSON,
    DamCreateAssetRequestFromJSON,
    DamCreateAssetRequestToJSON,
    DamGetAssetByCodeRequestFromJSON,
    DamGetAssetByCodeRequestToJSON,
    DamListAssetsByCodesRequestFromJSON,
    DamListAssetsByCodesRequestToJSON,
    DamListAssetsByCodesResponseFromJSON,
    DamListAssetsByCodesResponseToJSON,
    DamListAssetsByIdsRequestFromJSON,
    DamListAssetsByIdsRequestToJSON,
    DamListAssetsByIdsResponseFromJSON,
    DamListAssetsByIdsResponseToJSON,
    DamListAssetsRequestFromJSON,
    DamListAssetsRequestToJSON,
    DamListAssetsResponseFromJSON,
    DamListAssetsResponseToJSON,
    DamUpdateAssetRequestFromJSON,
    DamUpdateAssetRequestToJSON,
    RpcStatusFromJSON,
    RpcStatusToJSON,
} from '../models/index';

export interface BatchUploadAssetsRequest {
    body: DamBatchUploadAssetsRequest;
}

export interface BatchUploadAssets0Request {
    body: DamBatchUploadAssetsRequest;
}

export interface CreateAssetRequest {
    body: DamCreateAssetRequest;
}

export interface CreateAsset0Request {
    body: DamCreateAssetRequest;
}

export interface GetAssetByCodeRequest {
    body: DamGetAssetByCodeRequest;
}

export interface GetAssetByCode0Request {
    body: DamGetAssetByCodeRequest;
}

export interface ListAssetsRequest {
    body: DamListAssetsRequest;
}

export interface ListAssetsByCodesRequest {
    body: DamListAssetsByCodesRequest;
}

export interface ListAssetsByCodes0Request {
    body: DamListAssetsByCodesRequest;
}

export interface ListAssetsByIdsRequest {
    body: DamListAssetsByIdsRequest;
}

export interface ListAssetsByIds0Request {
    body: DamListAssetsByIdsRequest;
}

export interface ListAssets0Request {
    body: DamListAssetsRequest;
}

export interface UpdateAssetRequest {
    body: DamUpdateAssetRequest;
}

export interface UpdateAsset0Request {
    body: DamUpdateAssetRequest;
}

/**
 * 
 */
export class BasicOperationsApi extends runtime.BaseAPI {

    /**
     * Batch Upload Assets
     */
    async batchUploadAssetsRaw(requestParameters: BatchUploadAssetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamBatchUploadAssetsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling batchUploadAssets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam.Dam/BatchUploadAssets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamBatchUploadAssetsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamBatchUploadAssetsResponseFromJSON(jsonValue));
    }

    /**
     * Batch Upload Assets
     */
    async batchUploadAssets(requestParameters: BatchUploadAssetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamBatchUploadAssetsResponse> {
        const response = await this.batchUploadAssetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Batch Upload Assets
     */
    async batchUploadAssets_1Raw(requestParameters: BatchUploadAssets0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamBatchUploadAssetsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling batchUploadAssets_1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam/batch_upload_assets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamBatchUploadAssetsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamBatchUploadAssetsResponseFromJSON(jsonValue));
    }

    /**
     * Batch Upload Assets
     */
    async batchUploadAssets_1(requestParameters: BatchUploadAssets0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamBatchUploadAssetsResponse> {
        const response = await this.batchUploadAssets_1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Asset
     */
    async createAssetRaw(requestParameters: CreateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamAsset>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam.Dam/CreateAsset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamCreateAssetRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamAssetFromJSON(jsonValue));
    }

    /**
     * Create Asset
     */
    async createAsset(requestParameters: CreateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamAsset> {
        const response = await this.createAssetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Asset
     */
    async createAsset_2Raw(requestParameters: CreateAsset0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamAsset>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAsset_2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam/create_asset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamCreateAssetRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamAssetFromJSON(jsonValue));
    }

    /**
     * Create Asset
     */
    async createAsset_2(requestParameters: CreateAsset0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamAsset> {
        const response = await this.createAsset_2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Asset By Code
     */
    async getAssetByCodeRaw(requestParameters: GetAssetByCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamAsset>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getAssetByCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam.Dam/GetAssetByCode`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamGetAssetByCodeRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamAssetFromJSON(jsonValue));
    }

    /**
     * Get Asset By Code
     */
    async getAssetByCode(requestParameters: GetAssetByCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamAsset> {
        const response = await this.getAssetByCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Asset By Code
     */
    async getAssetByCode_3Raw(requestParameters: GetAssetByCode0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamAsset>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getAssetByCode_3.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam/get_asset_by_code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamGetAssetByCodeRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamAssetFromJSON(jsonValue));
    }

    /**
     * Get Asset By Code
     */
    async getAssetByCode_3(requestParameters: GetAssetByCode0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamAsset> {
        const response = await this.getAssetByCode_3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Assets
     */
    async listAssetsRaw(requestParameters: ListAssetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamListAssetsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listAssets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam.Dam/ListAssets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamListAssetsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamListAssetsResponseFromJSON(jsonValue));
    }

    /**
     * List Assets
     */
    async listAssets(requestParameters: ListAssetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamListAssetsResponse> {
        const response = await this.listAssetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Assets By Codes
     */
    async listAssetsByCodesRaw(requestParameters: ListAssetsByCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamListAssetsByCodesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listAssetsByCodes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam.Dam/ListAssetsByCodes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamListAssetsByCodesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamListAssetsByCodesResponseFromJSON(jsonValue));
    }

    /**
     * List Assets By Codes
     */
    async listAssetsByCodes(requestParameters: ListAssetsByCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamListAssetsByCodesResponse> {
        const response = await this.listAssetsByCodesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Assets By Codes
     */
    async listAssetsByCodes_4Raw(requestParameters: ListAssetsByCodes0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamListAssetsByCodesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listAssetsByCodes_4.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam/list_assets_by_codes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamListAssetsByCodesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamListAssetsByCodesResponseFromJSON(jsonValue));
    }

    /**
     * List Assets By Codes
     */
    async listAssetsByCodes_4(requestParameters: ListAssetsByCodes0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamListAssetsByCodesResponse> {
        const response = await this.listAssetsByCodes_4Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Assets By Ids
     */
    async listAssetsByIdsRaw(requestParameters: ListAssetsByIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamListAssetsByIdsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listAssetsByIds.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam.Dam/ListAssetsByIds`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamListAssetsByIdsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamListAssetsByIdsResponseFromJSON(jsonValue));
    }

    /**
     * List Assets By Ids
     */
    async listAssetsByIds(requestParameters: ListAssetsByIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamListAssetsByIdsResponse> {
        const response = await this.listAssetsByIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Assets By Ids
     */
    async listAssetsByIds_5Raw(requestParameters: ListAssetsByIds0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamListAssetsByIdsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listAssetsByIds_5.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam/list_assets_by_ids`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamListAssetsByIdsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamListAssetsByIdsResponseFromJSON(jsonValue));
    }

    /**
     * List Assets By Ids
     */
    async listAssetsByIds_5(requestParameters: ListAssetsByIds0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamListAssetsByIdsResponse> {
        const response = await this.listAssetsByIds_5Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Assets
     */
    async listAssets_6Raw(requestParameters: ListAssets0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamListAssetsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listAssets_6.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam/list_assets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamListAssetsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamListAssetsResponseFromJSON(jsonValue));
    }

    /**
     * List Assets
     */
    async listAssets_6(requestParameters: ListAssets0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamListAssetsResponse> {
        const response = await this.listAssets_6Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Asset
     */
    async updateAssetRaw(requestParameters: UpdateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamAsset>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam.Dam/UpdateAsset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamUpdateAssetRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamAssetFromJSON(jsonValue));
    }

    /**
     * Update Asset
     */
    async updateAsset(requestParameters: UpdateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamAsset> {
        const response = await this.updateAssetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Asset
     */
    async updateAsset_7Raw(requestParameters: UpdateAsset0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DamAsset>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateAsset_7.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/dam/update_asset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DamUpdateAssetRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DamAssetFromJSON(jsonValue));
    }

    /**
     * Update Asset
     */
    async updateAsset_7(requestParameters: UpdateAsset0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DamAsset> {
        const response = await this.updateAsset_7Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
