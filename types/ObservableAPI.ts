import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";
export class ObservableBasicOperationsApi {
    private requestFactory: BasicOperationsApiRequestFactory;
    private responseProcessor: BasicOperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicOperationsApiRequestFactory,
        responseProcessor?: BasicOperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicOperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicOperationsApiResponseProcessor();
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssetsWithHttpInfo(body: DamBatchUploadAssetsRequest, _options?: Configuration): Observable<HttpInfo<DamBatchUploadAssetsResponse>> {
        const requestContextPromise = this.requestFactory.batchUploadAssets(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchUploadAssetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssets(body: DamBatchUploadAssetsRequest, _options?: Configuration): Observable<DamBatchUploadAssetsResponse> {
        return this.batchUploadAssetsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamBatchUploadAssetsResponse>) => apiResponse.data));
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssets_1WithHttpInfo(body: DamBatchUploadAssetsRequest, _options?: Configuration): Observable<HttpInfo<DamBatchUploadAssetsResponse>> {
        const requestContextPromise = this.requestFactory.batchUploadAssets_1(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchUploadAssets_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch Upload Assets
     * @param body 
     */
    public batchUploadAssets_1(body: DamBatchUploadAssetsRequest, _options?: Configuration): Observable<DamBatchUploadAssetsResponse> {
        return this.batchUploadAssets_1WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamBatchUploadAssetsResponse>) => apiResponse.data));
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAssetWithHttpInfo(body: DamCreateAssetRequest, _options?: Configuration): Observable<HttpInfo<DamAsset>> {
        const requestContextPromise = this.requestFactory.createAsset(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAssetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAsset(body: DamCreateAssetRequest, _options?: Configuration): Observable<DamAsset> {
        return this.createAssetWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamAsset>) => apiResponse.data));
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAsset_2WithHttpInfo(body: DamCreateAssetRequest, _options?: Configuration): Observable<HttpInfo<DamAsset>> {
        const requestContextPromise = this.requestFactory.createAsset_2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAsset_2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Asset
     * @param body 
     */
    public createAsset_2(body: DamCreateAssetRequest, _options?: Configuration): Observable<DamAsset> {
        return this.createAsset_2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamAsset>) => apiResponse.data));
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCodeWithHttpInfo(body: DamGetAssetByCodeRequest, _options?: Configuration): Observable<HttpInfo<DamAsset>> {
        const requestContextPromise = this.requestFactory.getAssetByCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssetByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCode(body: DamGetAssetByCodeRequest, _options?: Configuration): Observable<DamAsset> {
        return this.getAssetByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamAsset>) => apiResponse.data));
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCode_3WithHttpInfo(body: DamGetAssetByCodeRequest, _options?: Configuration): Observable<HttpInfo<DamAsset>> {
        const requestContextPromise = this.requestFactory.getAssetByCode_3(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssetByCode_3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Asset By Code
     * @param body 
     */
    public getAssetByCode_3(body: DamGetAssetByCodeRequest, _options?: Configuration): Observable<DamAsset> {
        return this.getAssetByCode_3WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamAsset>) => apiResponse.data));
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssetsWithHttpInfo(body: DamListAssetsRequest, _options?: Configuration): Observable<HttpInfo<DamListAssetsResponse>> {
        const requestContextPromise = this.requestFactory.listAssets(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAssetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssets(body: DamListAssetsRequest, _options?: Configuration): Observable<DamListAssetsResponse> {
        return this.listAssetsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamListAssetsResponse>) => apiResponse.data));
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodesWithHttpInfo(body: DamListAssetsByCodesRequest, _options?: Configuration): Observable<HttpInfo<DamListAssetsByCodesResponse>> {
        const requestContextPromise = this.requestFactory.listAssetsByCodes(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAssetsByCodesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodes(body: DamListAssetsByCodesRequest, _options?: Configuration): Observable<DamListAssetsByCodesResponse> {
        return this.listAssetsByCodesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamListAssetsByCodesResponse>) => apiResponse.data));
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodes_4WithHttpInfo(body: DamListAssetsByCodesRequest, _options?: Configuration): Observable<HttpInfo<DamListAssetsByCodesResponse>> {
        const requestContextPromise = this.requestFactory.listAssetsByCodes_4(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAssetsByCodes_4WithHttpInfo(rsp)));
            }));
    }

    /**
     * List Assets By Codes
     * @param body 
     */
    public listAssetsByCodes_4(body: DamListAssetsByCodesRequest, _options?: Configuration): Observable<DamListAssetsByCodesResponse> {
        return this.listAssetsByCodes_4WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamListAssetsByCodesResponse>) => apiResponse.data));
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIdsWithHttpInfo(body: DamListAssetsByIdsRequest, _options?: Configuration): Observable<HttpInfo<DamListAssetsByIdsResponse>> {
        const requestContextPromise = this.requestFactory.listAssetsByIds(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAssetsByIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIds(body: DamListAssetsByIdsRequest, _options?: Configuration): Observable<DamListAssetsByIdsResponse> {
        return this.listAssetsByIdsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamListAssetsByIdsResponse>) => apiResponse.data));
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIds_5WithHttpInfo(body: DamListAssetsByIdsRequest, _options?: Configuration): Observable<HttpInfo<DamListAssetsByIdsResponse>> {
        const requestContextPromise = this.requestFactory.listAssetsByIds_5(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAssetsByIds_5WithHttpInfo(rsp)));
            }));
    }

    /**
     * List Assets By Ids
     * @param body 
     */
    public listAssetsByIds_5(body: DamListAssetsByIdsRequest, _options?: Configuration): Observable<DamListAssetsByIdsResponse> {
        return this.listAssetsByIds_5WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamListAssetsByIdsResponse>) => apiResponse.data));
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssets_6WithHttpInfo(body: DamListAssetsRequest, _options?: Configuration): Observable<HttpInfo<DamListAssetsResponse>> {
        const requestContextPromise = this.requestFactory.listAssets_6(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAssets_6WithHttpInfo(rsp)));
            }));
    }

    /**
     * List Assets
     * @param body 
     */
    public listAssets_6(body: DamListAssetsRequest, _options?: Configuration): Observable<DamListAssetsResponse> {
        return this.listAssets_6WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamListAssetsResponse>) => apiResponse.data));
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAssetWithHttpInfo(body: DamUpdateAssetRequest, _options?: Configuration): Observable<HttpInfo<DamAsset>> {
        const requestContextPromise = this.requestFactory.updateAsset(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAssetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAsset(body: DamUpdateAssetRequest, _options?: Configuration): Observable<DamAsset> {
        return this.updateAssetWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamAsset>) => apiResponse.data));
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAsset_7WithHttpInfo(body: DamUpdateAssetRequest, _options?: Configuration): Observable<HttpInfo<DamAsset>> {
        const requestContextPromise = this.requestFactory.updateAsset_7(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAsset_7WithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Asset
     * @param body 
     */
    public updateAsset_7(body: DamUpdateAssetRequest, _options?: Configuration): Observable<DamAsset> {
        return this.updateAsset_7WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<DamAsset>) => apiResponse.data));
    }

}
