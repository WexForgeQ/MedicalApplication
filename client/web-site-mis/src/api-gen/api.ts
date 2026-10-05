/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum SortOrder {
	Asc = 'Asc',
	Desc = 'Desc',
}

export enum SlotStatus {
	Free = 'Free',
	Occupied = 'Occupied',
}

export enum NewsArticleType {
	Stories = 'Stories',
	News = 'News',
	Offers = 'Offers',
}

export enum AppointmentType {
	Primary = 'Primary',
	Repeated = 'Repeated',
	Preventive = 'Preventive',
	Referral = 'Referral',
}

export interface AdminLoginCommand {
	login?: string | null;
	password?: string | null;
}

export interface AppointmentDto {
	/** @format uuid */
	id?: string;
	user?: UserDto;
	appointmentType?: AppointmentType;
}

export interface CreateAppointmentCommand {
	/** @format uuid */
	slotId?: string;
	/** @format uuid */
	userId?: string;
	appointmentType?: AppointmentType;
}

export interface CreateDoctorCommand {
	name?: string | null;
	patronym?: string | null;
	surname?: string | null;
	/** @format uuid */
	specializationId?: string;
	gender?: boolean;
	/**
	 * @format date
	 * @example "dd.mm.yyyy"
	 */
	birthDay?: string;
	phoneNumber?: string | null;
	mail?: string | null;
	address?: string | null;
	office?: string | null;
	photoUrl?: string | null;
}

export interface CreateNewsArticleCommand {
	title?: string | null;
	description?: string | null;
	keyWords?: string | null;
	imageUrl?: string | null;
	newsArticleType?: NewsArticleType;
}

export interface CreateServiceCommand {
	/** @format uuid */
	specializationId?: string;
	doctors?: string[] | null;
	title?: string | null;
	shortDescription?: string | null;
	fullDescription?: string | null;
	/** @format double */
	price?: number;
}

export interface CreateSlotCommand {
	/** @format uuid */
	doctorId?: string;
	/** @format date-time */
	dateTime?: string;
}

export interface CreateSpecializationCommand {
	name?: string | null;
	pictureUrl?: string | null;
}

export interface CreateUploadingUrlCommand {
	mimeType: string | null;
}

export interface CreateUserAppointmentDto {
	/** @format uuid */
	slotId?: string;
	appointmentType?: AppointmentType;
}

export interface CreateVisitCommand {
	/** @format uuid */
	userId?: string;
	/** @format uuid */
	doctorId?: string;
	/** @format date-time */
	dateTime?: string;
	diagnosis?: string | null;
	recomendations?: string | null;
}

export interface DeleteAppointmentCommand {
	/** @format uuid */
	appointmentId?: string;
}

export interface DeleteDoctorCommand {
	/** @format uuid */
	id?: string;
}

export interface DeleteNewsArticleCommand {
	/** @format uuid */
	id?: string;
}

export interface DeleteServiceCommand {
	/** @format uuid */
	serviceId?: string;
}

export interface DeleteSlotCommand {
	/** @format uuid */
	slotId?: string;
}

export interface DeleteSpecializationCommand {
	/** @format uuid */
	id: string;
}

export interface DeleteUserCommand {
	/** @format uuid */
	userId?: string;
}

export interface DeleteVisitCommand {
	/** @format uuid */
	id?: string;
}

export interface DoctorDto {
	/** @format uuid */
	id?: string;
	name?: string | null;
	patronym?: string | null;
	surname?: string | null;
	gender?: boolean;
	/**
	 * @format date
	 * @example "dd.mm.yyyy"
	 */
	birthDay?: string;
	phoneNumber?: string | null;
	mail?: string | null;
	address?: string | null;
	specialization?: NamedEntityDto;
	office?: string | null;
	photoUrl?: string | null;
}

export interface DoctorDtoPaginatedList {
	items?: DoctorDto[] | null;
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	totalPages?: number;
	/** @format int32 */
	totalCount?: number;
	/** @format int32 */
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface FullServiceDto {
	/** @format uuid */
	id?: string;
	specialization?: NamedEntityDto;
	title?: string | null;
	shortDescription?: string | null;
	/** @format double */
	price?: number;
	fullDescription?: string | null;
	doctors?: DoctorDto[] | null;
}

export interface GetDoctorWithPaginationQuery {
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	pageSize?: number;
	sortOrder?: SortOrder;
	ordering?: string | null;
	/** @format uuid */
	specializationId?: string | null;
	surname?: string | null;
	office?: string | null;
}

export interface GetNewsArticlesWithPaginationQuery {
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	pageSize?: number;
	sortOrder?: SortOrder;
	ordering?: string | null;
	newsArticleType?: NewsArticleType;
}

export interface GetServicesWithPaginationQuery {
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	pageSize?: number;
	sortOrder?: SortOrder;
	ordering?: string | null;
	/** @format uuid */
	specializationId?: string | null;
}

export interface GetSlotsWithPaginationQuery {
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	pageSize?: number;
	sortOrder?: SortOrder;
	ordering?: string | null;
	/** @format date */
	date?: string | null;
	/** @format uuid */
	specializationId?: string | null;
	doctorSurname?: string | null;
	doctorGender?: boolean | null;
}

export interface GetSpecializationWithPaginationQuery {
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	pageSize?: number;
	sortOrder?: SortOrder;
	ordering?: string | null;
}

export interface GetUsersWithPaginationQuery {
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	pageSize?: number;
	sortOrder?: SortOrder;
	ordering?: string | null;
	surname?: string | null;
	phoneNumber?: string | null;
}

export interface NamedEntityDto {
	/** @format uuid */
	id?: string;
	name?: string | null;
}

export interface NewsArticleDto {
	/** @format uuid */
	id?: string;
	title?: string | null;
	description?: string | null;
	keyWords?: string | null;
	imageUrl?: string | null;
	/**
	 * @format date
	 * @example "dd.mm.yyyy"
	 */
	date?: string;
	newsArticleType?: NewsArticleType;
}

export interface NewsArticleDtoPaginatedList {
	items?: NewsArticleDto[] | null;
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	totalPages?: number;
	/** @format int32 */
	totalCount?: number;
	/** @format int32 */
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface ProblemDetails {
	type?: string | null;
	title?: string | null;
	/** @format int32 */
	status?: number | null;
	detail?: string | null;
	instance?: string | null;
	[key: string]: any;
}

export interface RegisterUserCommand {
	name?: string | null;
	surname?: string | null;
	patronym?: string | null;
	gender?: boolean;
	mail?: string | null;
	/**
	 * @format date
	 * @example "dd.mm.yyyy"
	 */
	birthDay?: string;
	phoneNumber?: string | null;
	address?: string | null;
	chronicDiseaseData?: string | null;
}

export interface SendSmsCommand {
	phoneNumber: string | null;
}

export interface ShortServiceDto {
	/** @format uuid */
	id?: string;
	specialization?: NamedEntityDto;
	title?: string | null;
	shortDescription?: string | null;
	/** @format double */
	price?: number;
}

export interface ShortServiceDtoPaginatedList {
	items?: ShortServiceDto[] | null;
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	totalPages?: number;
	/** @format int32 */
	totalCount?: number;
	/** @format int32 */
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface SlotDto {
	/** @format uuid */
	id?: string;
	doctor?: DoctorDto;
	/** @format date-time */
	dateTime?: string;
	slotStatus?: SlotStatus;
	appointment?: AppointmentDto;
}

export interface SlotDtoPaginatedList {
	items?: SlotDto[] | null;
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	totalPages?: number;
	/** @format int32 */
	totalCount?: number;
	/** @format int32 */
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface SpecializationDto {
	/** @format uuid */
	id?: string;
	name?: string | null;
	pictureUrl?: string | null;
}

export interface SpecializationDtoPaginatedList {
	items?: SpecializationDto[] | null;
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	totalPages?: number;
	/** @format int32 */
	totalCount?: number;
	/** @format int32 */
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface TokenModel {
	accessToken?: string | null;
	refreshToken?: string | null;
}

export interface UpdateAppointmentCommand {
	/** @format uuid */
	appointmentId?: string;
	/** @format uuid */
	slotId?: string;
	/** @format uuid */
	userId?: string;
	appointmentType?: AppointmentType;
}

export interface UpdateDoctorCommand {
	/** @format uuid */
	id?: string;
	name?: string | null;
	patronym?: string | null;
	surname?: string | null;
	/** @format uuid */
	specializationId?: string;
	gender?: boolean;
	/**
	 * @format date
	 * @example "dd.mm.yyyy"
	 */
	birthDay?: string;
	phoneNumber?: string | null;
	mail?: string | null;
	address?: string | null;
	office?: string | null;
	photoUrl?: string | null;
}

export interface UpdateNewsArticleCommand {
	/** @format uuid */
	id?: string;
	title?: string | null;
	description?: string | null;
	keyWords?: string | null;
	imageUrl?: string | null;
	newsArticleType?: NewsArticleType;
}

export interface UpdateServiceCommand {
	/** @format uuid */
	serviceId?: string;
	/** @format uuid */
	specializationId?: string;
	doctors?: string[] | null;
	title?: string | null;
	shortDescription?: string | null;
	fullDescription?: string | null;
	/** @format double */
	price?: number;
}

export interface UpdateSlotCommand {
	/** @format uuid */
	slotId?: string;
	/** @format uuid */
	doctorId?: string;
	/** @format date-time */
	dateTime?: string;
	slotStatus?: SlotStatus;
}

export interface UpdateSpecializationCommand {
	/** @format uuid */
	id?: string;
	name?: string | null;
	pictureUrl?: string | null;
}

export interface UpdateUserCommand {
	/** @format uuid */
	id?: string;
	name?: string | null;
	surname?: string | null;
	patronym?: string | null;
	gender?: boolean;
	mail?: string | null;
	/**
	 * @format date
	 * @example "dd.mm.yyyy"
	 */
	birthDay?: string;
	phoneNumber?: string | null;
	address?: string | null;
	chronicDiseaseData?: string | null;
}

export interface UpdateVisitCommand {
	/** @format uuid */
	id?: string;
	/** @format uuid */
	userId?: string;
	/** @format uuid */
	doctorId?: string;
	/** @format date-time */
	dateTime?: string;
	diagnosis?: string | null;
	recomendations?: string | null;
}

export interface UserAppoinmentDto {
	/** @format uuid */
	id?: string;
	user?: UserDto;
	doctor?: DoctorDto;
	/** @format date-time */
	dateTime?: string;
	slotStatus?: SlotStatus;
	appointmentType?: AppointmentType;
}

export interface UserAppoinmentDtoPaginatedList {
	items?: UserAppoinmentDto[] | null;
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	totalPages?: number;
	/** @format int32 */
	totalCount?: number;
	/** @format int32 */
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface UserDto {
	/** @format uuid */
	id?: string;
	name?: string | null;
	surname?: string | null;
	patronym?: string | null;
	gender?: boolean;
	/**
	 * @format date
	 * @example "dd.mm.yyyy"
	 */
	birthDay?: string;
	phoneNumber?: string | null;
	mail?: string | null;
	address?: string | null;
	chronicDiseaseData?: string | null;
	visitHistory?: VisitDto[] | null;
}

export interface UserDtoPaginatedList {
	items?: UserDto[] | null;
	/** @format int32 */
	pageNumber?: number;
	/** @format int32 */
	totalPages?: number;
	/** @format int32 */
	totalCount?: number;
	/** @format int32 */
	pageSize?: number;
	hasPreviousPage?: boolean;
	hasNextPage?: boolean;
}

export interface UserLoginCommand {
	phoneNumber: string | null;
	code: string | null;
}

export interface VisitDto {
	/** @format uuid */
	id?: string;
	/** @format uuid */
	userId?: string;
	doctor?: NamedEntityDto;
	/** @format date-time */
	dateTime?: string;
	diagnosis?: string | null;
	recomendations?: string | null;
}

import type {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	HeadersDefaults,
	ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
	AxiosRequestConfig,
	'data' | 'params' | 'url' | 'responseType'
> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseType;
	/** request body */
	body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
	AxiosRequestConfig,
	'data' | 'cancelToken'
> {
	securityWorker?: (
		securityData: SecurityDataType | null,
	) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
	secure?: boolean;
	format?: ResponseType;
}

export enum ContentType {
	Json = 'application/json',
	JsonApi = 'application/vnd.api+json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
	public instance: AxiosInstance;
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
	private secure?: boolean;
	private format?: ResponseType;

	constructor({
		securityWorker,
		secure,
		format,
		...axiosConfig
	}: ApiConfig<SecurityDataType> = {}) {
		this.instance = axios.create({
			...axiosConfig,
			baseURL: axiosConfig.baseURL || '',
		});
		this.secure = secure;
		this.format = format;
		this.securityWorker = securityWorker;
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected mergeRequestParams(
		params1: AxiosRequestConfig,
		params2?: AxiosRequestConfig,
	): AxiosRequestConfig {
		const method = params1.method || (params2 && params2.method);

		return {
			...this.instance.defaults,
			...params1,
			...(params2 || {}),
			headers: {
				...((method &&
					this.instance.defaults.headers[
						method.toLowerCase() as keyof HeadersDefaults
					]) ||
					{}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		};
	}

	protected stringifyFormItem(formItem: unknown) {
		if (typeof formItem === 'object' && formItem !== null) {
			return JSON.stringify(formItem);
		} else {
			return `${formItem}`;
		}
	}

	protected createFormData(input: Record<string, unknown>): FormData {
		if (input instanceof FormData) {
			return input;
		}
		return Object.keys(input || {}).reduce((formData, key) => {
			const property = input[key];
			const propertyContent: any[] = property instanceof Array ? property : [property];

			for (const formItem of propertyContent) {
				const isFileType = formItem instanceof Blob || formItem instanceof File;
				formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
			}

			return formData;
		}, new FormData());
	}

	public request = async <T = any, _E = any>({
		secure,
		path,
		type,
		query,
		format,
		body,
		...params
	}: FullRequestParams): Promise<AxiosResponse<T>> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const responseFormat = format || this.format || undefined;

		if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
			body = this.createFormData(body as Record<string, unknown>);
		}

		if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
			body = JSON.stringify(body);
		}

		return this.instance.request({
			...requestParams,
			headers: {
				...(requestParams.headers || {}),
				...(type ? { 'Content-Type': type } : {}),
			},
			params: query,
			responseType: responseFormat,
			data: body,
			url: path,
		});
	};
}

/**
 * @title WebAPI
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	appointment = {
		/**
		 * No description
		 *
		 * @tags Appointment
		 * @name AppointmentCreate
		 * @request POST:/Appointment
		 * @secure
		 */
		appointmentCreate: (data: CreateAppointmentCommand, params: RequestParams = {}) =>
			this.request<any, AppointmentDto>({
				path: `/Appointment`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Appointment
		 * @name AppointmentUpdate
		 * @request PUT:/Appointment
		 * @secure
		 */
		appointmentUpdate: (data: UpdateAppointmentCommand, params: RequestParams = {}) =>
			this.request<any, AppointmentDto>({
				path: `/Appointment`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Appointment
		 * @name AppointmentDelete
		 * @request DELETE:/Appointment
		 * @secure
		 */
		appointmentDelete: (data: DeleteAppointmentCommand, params: RequestParams = {}) =>
			this.request<any, AppointmentDto>({
				path: `/Appointment`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Appointment
		 * @name PostAppointment
		 * @request POST:/Appointment/my
		 * @secure
		 */
		postAppointment: (data: CreateUserAppointmentDto, params: RequestParams = {}) =>
			this.request<any, AppointmentDto>({
				path: `/Appointment/my`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Appointment
		 * @name GetAppointment
		 * @request GET:/Appointment/my
		 * @secure
		 */
		getAppointment: (params: RequestParams = {}) =>
			this.request<any, UserAppoinmentDtoPaginatedList>({
				path: `/Appointment/my`,
				method: 'GET',
				secure: true,
				...params,
			}),
	};
	auth = {
		/**
		 * No description
		 *
		 * @tags Auth
		 * @name AdminLoginCreate
		 * @request POST:/Auth/admin-login
		 * @secure
		 */
		adminLoginCreate: (data: AdminLoginCommand, params: RequestParams = {}) =>
			this.request<any, TokenModel>({
				path: `/Auth/admin-login`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth
		 * @name LoginCreate
		 * @request POST:/Auth/login
		 * @secure
		 */
		loginCreate: (data: UserLoginCommand, params: RequestParams = {}) =>
			this.request<any, TokenModel>({
				path: `/Auth/login`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Auth
		 * @name RefreshTokenCreate
		 * @request POST:/Auth/refresh-token
		 * @secure
		 */
		refreshTokenCreate: (data: TokenModel, params: RequestParams = {}) =>
			this.request<any, TokenModel>({
				path: `/Auth/refresh-token`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
	doctor = {
		/**
		 * No description
		 *
		 * @tags Doctor
		 * @name PaginatedCreate
		 * @request POST:/Doctor/paginated
		 * @secure
		 */
		paginatedCreate: (data: GetDoctorWithPaginationQuery, params: RequestParams = {}) =>
			this.request<any, DoctorDtoPaginatedList>({
				path: `/Doctor/paginated`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Doctor
		 * @name DoctorList
		 * @request GET:/Doctor
		 * @secure
		 */
		doctorList: (
			query?: {
				/** @format uuid */
				id?: string;
			},
			params: RequestParams = {},
		) =>
			this.request<any, DoctorDto>({
				path: `/Doctor`,
				method: 'GET',
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Doctor
		 * @name DoctorCreate
		 * @request POST:/Doctor
		 * @secure
		 */
		doctorCreate: (data: CreateDoctorCommand, params: RequestParams = {}) =>
			this.request<any, DoctorDto>({
				path: `/Doctor`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Doctor
		 * @name DoctorUpdate
		 * @request PUT:/Doctor
		 * @secure
		 */
		doctorUpdate: (data: UpdateDoctorCommand, params: RequestParams = {}) =>
			this.request<any, DoctorDto>({
				path: `/Doctor`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Doctor
		 * @name DoctorDelete
		 * @request DELETE:/Doctor
		 * @secure
		 */
		doctorDelete: (data: DeleteDoctorCommand, params: RequestParams = {}) =>
			this.request<any, ProblemDetails>({
				path: `/Doctor`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
	file = {
		/**
		 * No description
		 *
		 * @tags File
		 * @name FileCreate
		 * @request POST:/File
		 * @secure
		 */
		fileCreate: (data: CreateUploadingUrlCommand, params: RequestParams = {}) =>
			this.request<any, string>({
				path: `/File`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
	newsArticle = {
		/**
		 * No description
		 *
		 * @tags NewsArticle
		 * @name PaginatedCreate
		 * @request POST:/NewsArticle/paginated
		 * @secure
		 */
		paginatedCreate: (data: GetNewsArticlesWithPaginationQuery, params: RequestParams = {}) =>
			this.request<any, NewsArticleDtoPaginatedList>({
				path: `/NewsArticle/paginated`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags NewsArticle
		 * @name NewsArticleCreate
		 * @request POST:/NewsArticle
		 * @secure
		 */
		newsArticleCreate: (data: CreateNewsArticleCommand, params: RequestParams = {}) =>
			this.request<any, NewsArticleDto>({
				path: `/NewsArticle`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags NewsArticle
		 * @name NewsArticleUpdate
		 * @request PUT:/NewsArticle
		 * @secure
		 */
		newsArticleUpdate: (data: UpdateNewsArticleCommand, params: RequestParams = {}) =>
			this.request<any, NewsArticleDto>({
				path: `/NewsArticle`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags NewsArticle
		 * @name NewsArticleDelete
		 * @request DELETE:/NewsArticle
		 * @secure
		 */
		newsArticleDelete: (data: DeleteNewsArticleCommand, params: RequestParams = {}) =>
			this.request<any, NewsArticleDto>({
				path: `/NewsArticle`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags NewsArticle
		 * @name NewsArticleDetail
		 * @request GET:/NewsArticle/{id}
		 * @secure
		 */
		newsArticleDetail: (id: string, params: RequestParams = {}) =>
			this.request<any, NewsArticleDto>({
				path: `/NewsArticle/${id}`,
				method: 'GET',
				secure: true,
				...params,
			}),
	};
	service = {
		/**
		 * No description
		 *
		 * @tags Service
		 * @name PaginatedCreate
		 * @request POST:/Service/paginated
		 * @secure
		 */
		paginatedCreate: (data: GetServicesWithPaginationQuery, params: RequestParams = {}) =>
			this.request<any, ShortServiceDtoPaginatedList>({
				path: `/Service/paginated`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Service
		 * @name ServiceList
		 * @request GET:/Service
		 * @secure
		 */
		serviceList: (
			query?: {
				/** @format uuid */
				id?: string;
			},
			params: RequestParams = {},
		) =>
			this.request<any, FullServiceDto>({
				path: `/Service`,
				method: 'GET',
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Service
		 * @name ServiceCreate
		 * @request POST:/Service
		 * @secure
		 */
		serviceCreate: (data: CreateServiceCommand, params: RequestParams = {}) =>
			this.request<any, FullServiceDto>({
				path: `/Service`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Service
		 * @name ServiceUpdate
		 * @request PUT:/Service
		 * @secure
		 */
		serviceUpdate: (data: UpdateServiceCommand, params: RequestParams = {}) =>
			this.request<any, FullServiceDto>({
				path: `/Service`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Service
		 * @name ServiceDelete
		 * @request DELETE:/Service
		 * @secure
		 */
		serviceDelete: (data: DeleteServiceCommand, params: RequestParams = {}) =>
			this.request<any, FullServiceDto>({
				path: `/Service`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
	slot = {
		/**
		 * No description
		 *
		 * @tags Slot
		 * @name PaginatedCreate
		 * @request POST:/Slot/paginated
		 * @secure
		 */
		paginatedCreate: (data: GetSlotsWithPaginationQuery, params: RequestParams = {}) =>
			this.request<any, SlotDtoPaginatedList>({
				path: `/Slot/paginated`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Slot
		 * @name SlotList
		 * @request GET:/Slot
		 * @secure
		 */
		slotList: (
			query?: {
				/** @format uuid */
				id?: string;
			},
			params: RequestParams = {},
		) =>
			this.request<any, SlotDto>({
				path: `/Slot`,
				method: 'GET',
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Slot
		 * @name SlotCreate
		 * @request POST:/Slot
		 * @secure
		 */
		slotCreate: (data: CreateSlotCommand, params: RequestParams = {}) =>
			this.request<any, SlotDto>({
				path: `/Slot`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Slot
		 * @name SlotUpdate
		 * @request PUT:/Slot
		 * @secure
		 */
		slotUpdate: (data: UpdateSlotCommand, params: RequestParams = {}) =>
			this.request<any, SlotDto>({
				path: `/Slot`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Slot
		 * @name SlotDelete
		 * @request DELETE:/Slot
		 * @secure
		 */
		slotDelete: (data: DeleteSlotCommand, params: RequestParams = {}) =>
			this.request<any, SlotDto>({
				path: `/Slot`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
	sms = {
		/**
		 * No description
		 *
		 * @tags Sms
		 * @name PostSms
		 * @request POST:/Sms
		 * @secure
		 */
		postSms: (data: SendSmsCommand, params: RequestParams = {}) =>
			this.request<any, ProblemDetails>({
				path: `/Sms`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
	specialization = {
		/**
		 * No description
		 *
		 * @tags Specialization
		 * @name PaginatedCreate
		 * @request POST:/Specialization/paginated
		 * @secure
		 */
		paginatedCreate: (data: GetSpecializationWithPaginationQuery, params: RequestParams = {}) =>
			this.request<any, SpecializationDtoPaginatedList>({
				path: `/Specialization/paginated`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Specialization
		 * @name SpecializationList
		 * @request GET:/Specialization
		 * @secure
		 */
		specializationList: (
			query?: {
				/** @format uuid */
				id?: string;
			},
			params: RequestParams = {},
		) =>
			this.request<any, SpecializationDto>({
				path: `/Specialization`,
				method: 'GET',
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Specialization
		 * @name SpecializationCreate
		 * @request POST:/Specialization
		 * @secure
		 */
		specializationCreate: (data: CreateSpecializationCommand, params: RequestParams = {}) =>
			this.request<any, SpecializationDto>({
				path: `/Specialization`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Specialization
		 * @name SpecializationUpdate
		 * @request PUT:/Specialization
		 * @secure
		 */
		specializationUpdate: (data: UpdateSpecializationCommand, params: RequestParams = {}) =>
			this.request<any, SpecializationDto>({
				path: `/Specialization`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Specialization
		 * @name SpecializationDelete
		 * @request DELETE:/Specialization
		 * @secure
		 */
		specializationDelete: (data: DeleteSpecializationCommand, params: RequestParams = {}) =>
			this.request<any, ProblemDetails>({
				path: `/Specialization`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
	user = {
		/**
		 * No description
		 *
		 * @tags User
		 * @name UserCreate
		 * @request POST:/User
		 * @secure
		 */
		userCreate: (data: RegisterUserCommand, params: RequestParams = {}) =>
			this.request<any, TokenModel>({
				path: `/User`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name UserList
		 * @request GET:/User
		 * @secure
		 */
		userList: (
			query?: {
				/** @format uuid */
				userId?: string;
			},
			params: RequestParams = {},
		) =>
			this.request<any, UserDto>({
				path: `/User`,
				method: 'GET',
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name UserUpdate
		 * @request PUT:/User
		 * @secure
		 */
		userUpdate: (data: UpdateUserCommand, params: RequestParams = {}) =>
			this.request<any, UserDto>({
				path: `/User`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name UserDelete
		 * @request DELETE:/User
		 * @secure
		 */
		userDelete: (data: DeleteUserCommand, params: RequestParams = {}) =>
			this.request<any, ProblemDetails>({
				path: `/User`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name GetPaginatedCreate
		 * @request POST:/User/get-paginated
		 * @secure
		 */
		getPaginatedCreate: (data: GetUsersWithPaginationQuery, params: RequestParams = {}) =>
			this.request<any, UserDtoPaginatedList>({
				path: `/User/get-paginated`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name CurrentList
		 * @request GET:/User/current
		 * @secure
		 */
		currentList: (params: RequestParams = {}) =>
			this.request<any, UserDto>({
				path: `/User/current`,
				method: 'GET',
				secure: true,
				...params,
			}),
	};
	visit = {
		/**
		 * No description
		 *
		 * @tags Visit
		 * @name VisitCreate
		 * @request POST:/Visit
		 * @secure
		 */
		visitCreate: (data: CreateVisitCommand, params: RequestParams = {}) =>
			this.request<any, VisitDto>({
				path: `/Visit`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Visit
		 * @name VisitUpdate
		 * @request PUT:/Visit
		 * @secure
		 */
		visitUpdate: (data: UpdateVisitCommand, params: RequestParams = {}) =>
			this.request<any, VisitDto>({
				path: `/Visit`,
				method: 'PUT',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Visit
		 * @name VisitDelete
		 * @request DELETE:/Visit
		 * @secure
		 */
		visitDelete: (data: DeleteVisitCommand, params: RequestParams = {}) =>
			this.request<any, ProblemDetails>({
				path: `/Visit`,
				method: 'DELETE',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	};
}
