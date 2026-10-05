/* eslint-disable */
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

export enum ZodiacSign {
  Aries = "Aries",
  Taurus = "Taurus",
  Gemini = "Gemini",
  Cancer = "Cancer",
  Leo = "Leo",
  Virgo = "Virgo",
  Libra = "Libra",
  Scorpio = "Scorpio",
  Sagittarius = "Sagittarius",
  Capricorn = "Capricorn",
  Aquarius = "Aquarius",
  Pisces = "Pisces",
}

export enum UserStatus {
  Inactive = "Inactive",
  Active = "Active",
  Warned = "Warned",
  Banned = "Banned",
}

export enum Temperament {
  None = "None",
  Sanguine = "Sanguine",
  Choleric = "Choleric",
  Melancholic = "Melancholic",
  Phlegmatic = "Phlegmatic",
}

export enum SortOrder {
  Asc = "Asc",
  Desc = "Desc",
}

export enum ServiceType {
  Views = "Views",
  Clicks = "Clicks",
  Month = "Month",
}

export enum ReactionType {
  Like = "Like",
  Dislike = "Dislike",
}

export enum LifePositionCategory {
  Alcohol = "Alcohol",
  Smoking = "Smoking",
  Sport = "Sport",
}

export enum Kids {
  NotMention = "NotMention",
  NoKids = "NoKids",
  HaveKids = "HaveKids",
}

export enum Goal {
  None = "None",
  LongTermPartner = "LongTermPartner",
  ShortTermPartner = "ShortTermPartner",
  LookingFriends = "LookingFriends",
  Amusement = "Amusement",
}

export enum CheckType {
  Mobile = "Mobile",
  WebSite = "WebSite",
  Admin = "Admin",
}

export enum CheckStatus {
  AwaitingPayment = "AwaitingPayment",
  Paid = "Paid",
  Canceled = "Canceled",
}

export enum AppealType {
  Appeal = "Appeal",
  ComplaintOnUser = "ComplaintOnUser",
  ComplaintOnChat = "ComplaintOnChat",
}

export enum AppealStatus {
  InProgress = "InProgress",
  Processed = "Processed",
}

export enum AdvertisementType {
  MainScreen = "MainScreen",
  ProfileScreen = "ProfileScreen",
  DateIdeaScreen = "DateIdeaScreen",
}

export enum AdvertisementStatus {
  Active = "Active",
  Inactive = "Inactive",
  Moderating = "Moderating",
}

export enum AdvertisementCategory {
  Cafe = "Cafe",
  Flowers = "Flowers",
  Party = "Party",
  Exhibition = "Exhibition",
  Entertainment = "Entertainment",
  Cinema = "Cinema",
}

export interface ActDto {
  /** @format uuid */
  id?: string;
  /** @format int64 */
  publicId?: number;
  checkNumber?: string | null;
  advertiserName?: string | null;
  /** @format date-time */
  creationDate?: string;
}

export interface ActDtoPaginatedList {
  items?: ActDto[] | null;
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

export interface AdminLoginCommand {
  login: string | null;
  password: string | null;
}

export interface AdvertisementDto {
  /** @format uuid */
  id?: string;
  pictureUrl?: string | null;
  advertiser?: NamedEntityDto;
  title?: string | null;
  type?: AdvertisementType;
  description?: string | null;
  status?: AdvertisementStatus;
  tariff?: NamedEntityDto;
  /** @format int32 */
  viewsCount?: number;
  /** @format int32 */
  goal?: number;
  isStopped?: boolean;
}

export interface AdvertisementDtoPaginatedList {
  items?: AdvertisementDto[] | null;
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

export interface AdvertisementTariffDto {
  /** @format uuid */
  tariffId?: string;
  title?: string | null;
  description?: string | null;
  advertisementType?: AdvertisementType;
  /** @format int32 */
  price?: number;
  service?: ServiceDto;
  status?: AdvertisementStatus;
}

export interface AdvertisementTariffDtoPaginatedList {
  items?: AdvertisementTariffDto[] | null;
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

export interface AdvertiserDto {
  /** @format uuid */
  id?: string;
  /** @format int64 */
  publicId?: number;
  phoneNumber?: string | null;
  companyName?: string | null;
  email?: string | null;
  directorFio?: string | null;
  companyAddress?: string | null;
  unp?: string | null;
  currentAccount?: string | null;
  bik?: string | null;
  bankAddress?: string | null;
  companyDescription?: string | null;
}

export interface AdvertiserDtoPaginatedList {
  items?: AdvertiserDto[] | null;
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

export interface AdvertiserLoginCommand {
  phoneNumber: string | null;
  password: string | null;
}

export interface AppealDto {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  authorId?: string;
  username?: string | null;
  authorName?: string | null;
  date?: string | null;
  phoneNumber?: string | null;
  authorPhoneNumber?: string | null;
  description?: string | null;
  status?: AppealStatus;
}

export interface AppealDtoPaginatedList {
  items?: AppealDto[] | null;
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

export interface ChangeCheckStatusToPaidCommand {
  /** @format uuid */
  checkId?: string;
  newStatus?: CheckStatus;
}

export interface ChangePasswordDto {
  newPassword?: string | null;
  confirmedPassword?: string | null;
}

export interface ChatMessageDto {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  senderId?: string | null;
  text?: string | null;
  isRead?: boolean;
  /** @format date-time */
  dateTime?: string;
}

export interface CheckDto {
  /** @format uuid */
  id?: string;
  checkNumber?: string | null;
  checkType?: CheckType;
  /** @format int32 */
  price?: number;
  status?: CheckStatus;
  advertiserName?: string | null;
  /** @format int32 */
  durationMonth?: number;
  /** @format date-time */
  createdAt?: string;
}

export interface CheckDtoPaginatedList {
  items?: CheckDto[] | null;
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

export interface City {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface ClickToAdvertisementCommand {
  /** @format uuid */
  advertisementId?: string;
}

export interface CompanyInfoDto {
  /** @format uuid */
  id?: string;
  companyName?: string | null;
  phoneNumber?: string | null;
  unp?: string | null;
  currentAccount?: string | null;
  bik?: string | null;
  directorFio?: string | null;
  bankAddress?: string | null;
  companyAddress?: string | null;
  companyDescription?: string | null;
}

export interface ComplaintDto {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  authorId?: string;
  username?: string | null;
  authorName?: string | null;
  date?: string | null;
  phoneNumber?: string | null;
  authorPhoneNumber?: string | null;
  description?: string | null;
  status?: AppealStatus;
}

export interface ComplaintDtoPaginatedList {
  items?: ComplaintDto[] | null;
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

export interface CoordsDto {
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface CreateAdvertisementCommand {
  /** @format uuid */
  advertiserId?: string;
  title?: string | null;
  type?: AdvertisementType;
  description?: string | null;
  pictureUrl?: string | null;
  /** @format uuid */
  tariffId?: string;
  advertisementUrl?: string | null;
  /** @format int32 */
  multiplier?: number;
}

export interface CreateAdvertisementTariffCommand {
  title?: string | null;
  type?: AdvertisementType;
  /** @format int32 */
  price?: number;
  /** @format int32 */
  quantity?: number;
  serviceType?: ServiceType;
  description?: string | null;
}

export interface CreateAppealCommandDto {
  /** @format uuid */
  userId?: string;
  email?: string | null;
  description?: string | null;
  appealType?: AppealType;
}

export interface CreateDateIdeaAdvertisementCommand {
  title?: string | null;
  description?: string | null;
  advertisementCategory?: AdvertisementCategory;
  /** @format uuid */
  cityId?: string;
  /** @format uuid */
  advertiserId?: string;
  address?: string[] | null;
  promocode?: string | null;
  pictureUrl?: string | null;
  /** @format uuid */
  tariffId?: string;
  hasDiscount?: boolean;
}

export interface CreateInterestCommand {
  name?: string | null;
  /** @format uuid */
  categoryId?: string;
}

export interface CreateInterestWithNewInterestCategoryCommand {
  interestName?: string | null;
  interestCategoryName?: string | null;
}

export interface CreateLifePositionCommand {
  name?: string | null;
  category?: LifePositionCategory;
}

export interface CreateManagerCommand {
  name: string | null;
  phoneNumber: string | null;
  login: string | null;
  password: string | null;
}

export interface CreateUploadingUrlCommand {
  mimeType: string | null;
}

export interface CreateWorkPlaceCommand {
  name?: string | null;
  city?: string | null;
}

export interface DateIdeaAdvertisementDto {
  /** @format uuid */
  id?: string;
  pictureUrl?: string | null;
  title?: string | null;
  advertiser?: NamedEntityDto;
  description?: string | null;
  category?: AdvertisementCategory;
  city?: City;
  address?: string[] | null;
  promocode?: string | null;
  status?: AdvertisementStatus;
  tariff?: NamedEntityDto;
  hasDiscount?: boolean;
}

export interface DateIdeaAdvertisementDtoPaginatedList {
  items?: DateIdeaAdvertisementDto[] | null;
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

export interface DeleteAdvertisementCommand {
  /** @format uuid */
  id?: string;
}

export interface DeleteAdvertisementTariffCommand {
  /** @format uuid */
  id?: string;
}

export interface DeleteAdvertiserCommand {
  /** @format uuid */
  advertiserId?: string;
}

export interface DeleteAppealCommand {
  /** @format uuid */
  appealId?: string;
  appealType?: AppealType;
}

export interface DeleteChatCommand {
  /** @format uuid */
  chatId?: string;
}

export interface DeleteCheckCommand {
  /** @format uuid */
  checkId?: string;
}

export type DeleteCompanyInfoCommand = object;

export interface DeleteComplaintCommand {
  /** @format uuid */
  appealId?: string;
}

export interface DeleteDateIdeaAdvertisementCommand {
  /** @format uuid */
  advertisementId?: string;
}

export interface DeleteInterestCommand {
  /** @format uuid */
  id?: string;
}

export interface DeleteLifePositionCommand {
  /** @format uuid */
  id?: string;
}

export interface DeleteManagerCommand {
  /** @format uuid */
  managerId?: string;
}

export interface DeleteMatchDto {
  /** @format uuid */
  matchId?: string;
}

export interface DeleteUserDto {
  reason?: string | null;
}

export interface DeleteUserForAdminDto {
  /** @format uuid */
  userId?: string;
}

export interface DeleteWorkPlaceCommand {
  /** @format uuid */
  id?: string;
}

export interface DoubleRangeDto {
  /** @format double */
  minValue?: number;
  /** @format double */
  maxValue?: number;
}

export interface DownLoadStatisticsForYear {
  /** @format int32 */
  totalUsers?: number;
  /** @format int32 */
  month?: number;
}

export interface DownLoadStatisticsForYearDto {
  statistics?: DownLoadStatisticsForYear[] | null;
}

export interface GetActsWithPaginationQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  /** @format int64 */
  publicId?: number | null;
  advertiserName?: string | null;
}

export interface GetAdvertisementQuery {
  advertisementType?: AdvertisementType;
}

export interface GetAdvertisementStatisticsForYearQuery {
  /** @format uuid */
  advertisementId?: string;
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
}

export interface GetAdvertisementTariffWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  title?: string | null;
  advertisementType?: AdvertisementType;
  advertisementStatus?: AdvertisementStatus;
}

export interface GetAdvertisementWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  title?: string | null;
  advertiserName?: string | null;
  type?: AdvertisementType;
}

export interface GetAdvertiserWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
}

export interface GetAllCitiesUseCaseQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  name?: string | null;
}

export interface GetAppealsWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  /** @format date-time */
  date?: string | null;
  appealType?: AppealType;
}

export interface GetCheckWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  checkNumber?: string | null;
  advertiserName?: string | null;
  advertisementType?: AdvertisementType;
}

export interface GetComplaintsWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  /** @format date-time */
  date?: string | null;
}

export interface GetDateIdeaAdvertisementWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  title?: string | null;
  advertiser?: string | null;
  city?: string | null;
  advertisementCategory?: AdvertisementCategory;
}

export interface GetFilteredInterestCategoryQuery {
  name?: string | null;
}

export interface GetInterestsWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  name?: string | null;
  interestCategoryName?: string | null;
}

export interface GetLifePositionsWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  name?: string | null;
  category?: LifePositionCategory;
}

export interface GetManagersWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  login?: string | null;
  name?: string | null;
}

export interface GetNextUserForReactionDto {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  coords?: CoordsDto;
  ageRange?: Int32RangeDto;
  distanceRange?: DoubleRangeDto;
  gender?: boolean | null;
}

export interface GetTotalDownloadsForMonthStatisticsQuery {
  /** @format date */
  date?: string;
}

export interface GetUsersWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  workPlaceName?: string | null;
  /** @format uuid */
  interestCategoryId?: string | null;
  gender?: boolean | null;
}

export interface GetWorkPlaceWithPaginationParamsQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
  name?: string | null;
  city?: string | null;
}

export interface Int32RangeDto {
  /** @format int32 */
  minValue?: number;
  /** @format int32 */
  maxValue?: number;
}

export interface InterestCategoryDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface InterestDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  category?: InterestCategoryDto;
}

export interface InterestDtoPaginatedList {
  items?: InterestDto[] | null;
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

export interface LifePositionDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  category?: LifePositionCategory;
}

export interface LifePositionDtoPaginatedList {
  items?: LifePositionDto[] | null;
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

export interface LikedUserDto {
  /** @format uuid */
  userId?: string;
  pictureUrl?: string | null;
}

export interface LikedUserDtoPaginatedList {
  items?: LikedUserDto[] | null;
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

export interface LoginCommand {
  phoneNumber: string | null;
  code: string | null;
}

export interface ManagerDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  phoneNumber?: string | null;
  login?: string | null;
}

export interface ManagerDtoPaginatedList {
  items?: ManagerDto[] | null;
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

export interface NamedEntityDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
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

export interface ProcessAppealCommand {
  /** @format uuid */
  appealId?: string;
  appealType?: AppealType;
}

export interface ProcessComplaintCommand {
  /** @format uuid */
  appealId?: string;
}

export interface ReactionDto {
  /** @format uuid */
  targetUserId?: string;
  reactionType?: ReactionType;
}

export interface ReactionPaginatedDto {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  sortOrder?: SortOrder;
  ordering?: string | null;
}

export interface RegisterAdvertiserCommand {
  phoneNumber?: string | null;
  password?: string | null;
  companyName?: string | null;
  email?: string | null;
  directorFio?: string | null;
  companyAddress?: string | null;
  unp?: string | null;
  currentAccount?: string | null;
  bik?: string | null;
  bankAddress?: string | null;
  companyDescription?: string | null;
}

export interface RegisterCompanyInfoCommand {
  companyName?: string | null;
  phoneNumber?: string | null;
  unp?: string | null;
  currentAccount?: string | null;
  bik?: string | null;
  directorFio?: string | null;
  bankAddress?: string | null;
  companyAddress?: string | null;
  companyDescription?: string | null;
}

export interface RegisterUserCommand {
  name?: string | null;
  gender?: boolean;
  /** @format date */
  birthDay?: string;
  phoneNumber?: string | null;
  interestIds?: string[] | null;
  pictureUrls?: string[] | null;
}

export interface SendSmsCommand {
  phoneNumber: string | null;
}

export interface ServiceDto {
  /** @format int32 */
  quantity?: number;
  serviceType?: ServiceType;
}

export interface StoppedAdvertisementCommand {
  /** @format uuid */
  advertisementId?: string;
  isStopped?: boolean;
}

export interface TokenModel {
  accessToken?: string | null;
  refreshToken?: string | null;
}

export interface UpdateAdvertisementCommand {
  /** @format uuid */
  advertisementId?: string;
  title?: string | null;
  type?: AdvertisementType;
  description?: string | null;
  advertisementUrl?: string | null;
  pictureUrl?: string | null;
  /** @format uuid */
  tariffId?: string;
  /** @format int32 */
  multiplier?: number;
}

export interface UpdateAdvertisementTariffCommand {
  /** @format uuid */
  id?: string;
  title?: string | null;
  type?: AdvertisementType;
  /** @format int32 */
  price?: number;
  /** @format int32 */
  quantity?: number;
  serviceType?: ServiceType;
  description?: string | null;
  status?: AdvertisementStatus;
}

export interface UpdateAdvertiserCommand {
  /** @format uuid */
  id?: string;
  phoneNumber?: string | null;
  companyName?: string | null;
  email?: string | null;
  directorFio?: string | null;
  companyAddress?: string | null;
  unp?: string | null;
  currentAccount?: string | null;
  bik?: string | null;
  bankAddress?: string | null;
  companyDescription?: string | null;
}

export interface UpdateCompanyInfoCommand {
  companyName?: string | null;
  phoneNumber?: string | null;
  unp?: string | null;
  currentAccount?: string | null;
  bik?: string | null;
  directorFio?: string | null;
  bankAddress?: string | null;
  companyAddress?: string | null;
  companyDescription?: string | null;
}

export interface UpdateDateIdeaAdvertisementCommand {
  /** @format uuid */
  id?: string;
  title?: string | null;
  /** @format uuid */
  advertiserId?: string;
  description?: string | null;
  advertisementCategory?: AdvertisementCategory;
  /** @format uuid */
  cityId?: string;
  address?: string[] | null;
  promocode?: string | null;
  pictureUrl?: string | null;
  /** @format uuid */
  tariffId?: string;
  hasDiscount?: boolean;
}

export interface UpdateFileDto {
  fileUrlList?: string[] | null;
}

export interface UpdateInterestCommand {
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format uuid */
  categoryId?: string;
}

export interface UpdateLifePositionCommand {
  /** @format uuid */
  id?: string;
  name?: string | null;
  category?: LifePositionCategory;
}

export interface UpdateManagerCommand {
  /** @format uuid */
  managerId?: string;
  name: string | null;
  phoneNumber: string | null;
  login: string | null;
  password?: string | null;
}

export interface UpdateSystemSettingCommand {
  isYandexAdvertisementEnabled?: boolean;
  isInnerAdvertisementEnabled?: boolean;
  isDateIdeasAdvertisementEnabled?: boolean;
  isWorkInProgress?: boolean;
  isRussianUsersEnable?: boolean;
  /** @format int32 */
  version?: number;
}

export interface UpdateUserCommand {
  /** @format uuid */
  userId?: string;
  name?: string | null;
  gender?: boolean;
  /** @format uuid */
  cityId?: string | null;
  /** @format date */
  birthDay?: string;
  phoneNumber?: string | null;
  goal?: Goal;
  description?: string | null;
  zodiacSign?: ZodiacSign;
  temperament?: Temperament;
  kids?: Kids;
  /** @format uuid */
  workplaceId?: string | null;
  interestIds?: string[] | null;
  lifePositionIds?: string[] | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  status?: UserStatus;
}

export interface UpdateUserModel {
  name?: string | null;
  gender?: boolean;
  /** @format uuid */
  cityId?: string | null;
  interestIds?: string[] | null;
  /** @format date */
  birthDay?: string;
  phoneNumber?: string | null;
  communicationPurpose?: Goal;
  description?: string | null;
  zodiacSign?: ZodiacSign;
  temperament?: Temperament;
  kids?: Kids;
  /** @format uuid */
  workplaceId?: string | null;
  lifePositionIds?: string[] | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
}

export interface UpdateUsersStatusesCommand {
  userIds?: string[] | null;
  newStatus?: UserStatus;
}

export interface UpdateWorkPlaceCommand {
  /** @format uuid */
  id?: string;
  name?: string | null;
  city?: string | null;
}

export interface UserChatWithMassagesDto {
  /** @format uuid */
  chatId?: string;
  companion?: NamedEntityDto;
  chatMessages?: ChatMessageDto[] | null;
  companionPhotoUrl?: string | null;
  isActive?: boolean;
}

export interface UserDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  city?: City;
  gender?: boolean;
  /** @format date */
  birthDay?: string;
  phoneNumber?: string | null;
  goal?: Goal;
  description?: string | null;
  zodiacSign?: ZodiacSign;
  temperament?: Temperament;
  kids?: Kids;
  workplace?: WorkPlaceDto;
  interests?: InterestDto[] | null;
  lifePositions?: LifePositionDto[] | null;
  pictureUrls?: string[] | null;
  status?: UserStatus;
  /** @format date-time */
  lastUpdatedAt?: string | null;
  /** @format date-time */
  activity?: string | null;
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

export interface UserMatchDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  city?: City;
  gender?: boolean;
  /** @format date */
  birthDay?: string;
  phoneNumber?: string | null;
  goal?: Goal;
  description?: string | null;
  zodiacSign?: ZodiacSign;
  temperament?: Temperament;
  kids?: Kids;
  workplace?: WorkPlaceDto;
  interests?: InterestDto[] | null;
  lifePositions?: LifePositionDto[] | null;
  pictureUrls?: string[] | null;
  distance?: string | null;
}

export interface UserMatchDtoPaginatedList {
  items?: UserMatchDto[] | null;
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

export interface WorkPlaceDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  city?: string | null;
}

export interface WorkPlaceDtoPaginatedList {
  items?: WorkPlaceDto[] | null;
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

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
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
      baseURL: axiosConfig.baseURL || "",
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
    if (typeof formItem === "object" && formItem !== null) {
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
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
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
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
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
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Act
     * @name ActPaginatedCreate
     * @request POST:/api/Act/paginated
     */
    actPaginatedCreate: (
      data: GetActsWithPaginationQuery,
      params: RequestParams = {},
    ) =>
      this.request<ActDtoPaginatedList, any>({
        path: `/api/Act/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Act
     * @name ActDownloadDocumentDetail
     * @request GET:/api/Act/downloadDocument/{actId}
     */
    actDownloadDocumentDetail: (actId: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/Act/downloadDocument/${actId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementCreate
     * @request POST:/api/Advertisement
     */
    advertisementCreate: (
      data: CreateAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertisement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementDelete
     * @request DELETE:/api/Advertisement
     */
    advertisementDelete: (
      data: DeleteAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertisement`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementUpdate
     * @request PUT:/api/Advertisement
     */
    advertisementUpdate: (
      data: UpdateAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertisement`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementPaginatedCreate
     * @request POST:/api/Advertisement/paginated
     */
    advertisementPaginatedCreate: (
      data: GetAdvertisementWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<AdvertisementDtoPaginatedList, any>({
        path: `/api/Advertisement/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementGetAdvertisementCreate
     * @request POST:/api/Advertisement/getAdvertisement
     */
    advertisementGetAdvertisementCreate: (
      data: GetAdvertisementQuery,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertisement/getAdvertisement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementStopAdvertisementUpdate
     * @request PUT:/api/Advertisement/stopAdvertisement
     */
    advertisementStopAdvertisementUpdate: (
      data: StoppedAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertisement/stopAdvertisement`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementClickToAdvertisementUpdate
     * @request PUT:/api/Advertisement/clickToAdvertisement
     */
    advertisementClickToAdvertisementUpdate: (
      data: ClickToAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertisement/clickToAdvertisement`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertisement
     * @name AdvertisementGetStatisticsCreate
     * @request POST:/api/Advertisement/getStatistics
     */
    advertisementGetStatisticsCreate: (
      data: GetAdvertisementStatisticsForYearQuery,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertisement/getStatistics`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdvertisementTariff
     * @name AdvertisementTariffCreate
     * @request POST:/api/AdvertisementTariff
     */
    advertisementTariffCreate: (
      data: CreateAdvertisementTariffCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/AdvertisementTariff`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdvertisementTariff
     * @name AdvertisementTariffDelete
     * @request DELETE:/api/AdvertisementTariff
     */
    advertisementTariffDelete: (
      data: DeleteAdvertisementTariffCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/AdvertisementTariff`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdvertisementTariff
     * @name AdvertisementTariffUpdate
     * @request PUT:/api/AdvertisementTariff
     */
    advertisementTariffUpdate: (
      data: UpdateAdvertisementTariffCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/AdvertisementTariff`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdvertisementTariff
     * @name AdvertisementTariffPaginatedCreate
     * @request POST:/api/AdvertisementTariff/paginated
     */
    advertisementTariffPaginatedCreate: (
      data: GetAdvertisementTariffWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<AdvertisementTariffDtoPaginatedList, any>({
        path: `/api/AdvertisementTariff/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserList
     * @request GET:/api/Advertiser
     */
    advertiserList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Advertiser`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserCreate
     * @request POST:/api/Advertiser
     */
    advertiserCreate: (
      data: RegisterAdvertiserCommand,
      params: RequestParams = {},
    ) =>
      this.request<any, AdvertiserDto>({
        path: `/api/Advertiser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserDelete
     * @request DELETE:/api/Advertiser
     */
    advertiserDelete: (
      data: DeleteAdvertiserCommand,
      params: RequestParams = {},
    ) =>
      this.request<any, ProblemDetails>({
        path: `/api/Advertiser`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserUpdate
     * @request PUT:/api/Advertiser
     */
    advertiserUpdate: (
      data: UpdateAdvertiserCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertiser`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserPaginatedCreate
     * @request POST:/api/Advertiser/paginated
     */
    advertiserPaginatedCreate: (
      data: GetAdvertiserWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<AdvertiserDtoPaginatedList, any>({
        path: `/api/Advertiser/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserChangePasswordUpdate
     * @request PUT:/api/Advertiser/changePassword
     */
    advertiserChangePasswordUpdate: (
      data: ChangePasswordDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Advertiser/changePassword`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserLoginCreate
     * @request POST:/api/Advertiser/login
     */
    advertiserLoginCreate: (
      data: AdvertiserLoginCommand,
      params: RequestParams = {},
    ) =>
      this.request<TokenModel, any>({
        path: `/api/Advertiser/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advertiser
     * @name AdvertiserRefreshTokenCreate
     * @request POST:/api/Advertiser/refresh-token
     */
    advertiserRefreshTokenCreate: (
      data: TokenModel,
      params: RequestParams = {},
    ) =>
      this.request<TokenModel, any>({
        path: `/api/Advertiser/refresh-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appeal
     * @name AppealCreate
     * @request POST:/api/Appeal
     */
    appealCreate: (data: CreateAppealCommandDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Appeal`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appeal
     * @name AppealDelete
     * @request DELETE:/api/Appeal
     */
    appealDelete: (data: DeleteAppealCommand, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Appeal`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appeal
     * @name AppealPaginatedCreate
     * @request POST:/api/Appeal/paginated
     */
    appealPaginatedCreate: (
      data: GetAppealsWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<AppealDtoPaginatedList, any>({
        path: `/api/Appeal/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appeal
     * @name AppealProcessUpdate
     * @request PUT:/api/Appeal/process
     */
    appealProcessUpdate: (
      data: ProcessAppealCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Appeal/process`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthLoginCreate
     * @request POST:/api/Auth/login
     */
    authLoginCreate: (data: LoginCommand, params: RequestParams = {}) =>
      this.request<TokenModel, any>({
        path: `/api/Auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthRefreshTokenCreate
     * @request POST:/api/Auth/refresh-token
     */
    authRefreshTokenCreate: (data: TokenModel, params: RequestParams = {}) =>
      this.request<TokenModel, any>({
        path: `/api/Auth/refresh-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AdminAuthLoginCreate
     * @request POST:/api/Admin/Auth/login
     */
    adminAuthLoginCreate: (
      data: AdminLoginCommand,
      params: RequestParams = {},
    ) =>
      this.request<TokenModel, any>({
        path: `/api/Admin/Auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AdminAuthRefreshTokenCreate
     * @request POST:/api/Admin/Auth/refresh-token
     */
    adminAuthRefreshTokenCreate: (
      data: TokenModel,
      params: RequestParams = {},
    ) =>
      this.request<TokenModel, any>({
        path: `/api/Admin/Auth/refresh-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chat
     * @name ChatList
     * @request GET:/api/Chat
     */
    chatList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Chat`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chat
     * @name ChatDelete
     * @request DELETE:/api/Chat
     */
    chatDelete: (data: DeleteChatCommand, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Chat`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chat
     * @name ChatByUsersDetail
     * @request GET:/api/Chat/byUsers/{authorId}/{userId}
     */
    chatByUsersDetail: (
      authorId: string,
      userId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserChatWithMassagesDto, any>({
        path: `/api/Chat/byUsers/${authorId}/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Check
     * @name CheckChangeStatusToPaidUpdate
     * @request PUT:/api/Check/changeStatusToPaid
     */
    checkChangeStatusToPaidUpdate: (
      data: ChangeCheckStatusToPaidCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Check/changeStatusToPaid`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Check
     * @name CheckPaginatedCreate
     * @request POST:/api/Check/paginated
     */
    checkPaginatedCreate: (
      data: GetCheckWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<CheckDtoPaginatedList, any>({
        path: `/api/Check/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Check
     * @name CheckDownloadDocumentDetail
     * @request GET:/api/Check/downloadDocument/{checkId}
     */
    checkDownloadDocumentDetail: (
      checkId: string,
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/api/Check/downloadDocument/${checkId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Check
     * @name CheckDelete
     * @request DELETE:/api/Check
     */
    checkDelete: (data: DeleteCheckCommand, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Check`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags City
     * @name CityCreate
     * @request POST:/api/City
     */
    cityCreate: (data: GetAllCitiesUseCaseQuery, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/City`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyInfo
     * @name CompanyInfoList
     * @request GET:/api/CompanyInfo
     */
    companyInfoList: (params: RequestParams = {}) =>
      this.request<any, CompanyInfoDto>({
        path: `/api/CompanyInfo`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyInfo
     * @name CompanyInfoCreate
     * @request POST:/api/CompanyInfo
     */
    companyInfoCreate: (
      data: RegisterCompanyInfoCommand,
      params: RequestParams = {},
    ) =>
      this.request<any, CompanyInfoDto>({
        path: `/api/CompanyInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyInfo
     * @name CompanyInfoDelete
     * @request DELETE:/api/CompanyInfo
     */
    companyInfoDelete: (
      data: DeleteCompanyInfoCommand,
      params: RequestParams = {},
    ) =>
      this.request<any, ProblemDetails>({
        path: `/api/CompanyInfo`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyInfo
     * @name CompanyInfoUpdate
     * @request PUT:/api/CompanyInfo
     */
    companyInfoUpdate: (
      data: UpdateCompanyInfoCommand,
      params: RequestParams = {},
    ) =>
      this.request<any, CompanyInfoDto>({
        path: `/api/CompanyInfo`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complaint
     * @name ComplaintDelete
     * @request DELETE:/api/Complaint
     */
    complaintDelete: (
      data: DeleteComplaintCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Complaint`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complaint
     * @name ComplaintPaginatedCreate
     * @request POST:/api/Complaint/paginated
     */
    complaintPaginatedCreate: (
      data: GetComplaintsWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<ComplaintDtoPaginatedList, any>({
        path: `/api/Complaint/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complaint
     * @name ComplaintProcessUpdate
     * @request PUT:/api/Complaint/process
     */
    complaintProcessUpdate: (
      data: ProcessComplaintCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Complaint/process`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DateIdeaAdvertisement
     * @name DateIdeaAdvertisementCreate
     * @request POST:/api/DateIdeaAdvertisement
     */
    dateIdeaAdvertisementCreate: (
      data: CreateDateIdeaAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/DateIdeaAdvertisement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DateIdeaAdvertisement
     * @name DateIdeaAdvertisementDelete
     * @request DELETE:/api/DateIdeaAdvertisement
     */
    dateIdeaAdvertisementDelete: (
      data: DeleteDateIdeaAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/DateIdeaAdvertisement`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DateIdeaAdvertisement
     * @name DateIdeaAdvertisementUpdate
     * @request PUT:/api/DateIdeaAdvertisement
     */
    dateIdeaAdvertisementUpdate: (
      data: UpdateDateIdeaAdvertisementCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/DateIdeaAdvertisement`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DateIdeaAdvertisement
     * @name DateIdeaAdvertisementPaginatedCreate
     * @request POST:/api/DateIdeaAdvertisement/paginated
     */
    dateIdeaAdvertisementPaginatedCreate: (
      data: GetDateIdeaAdvertisementWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<DateIdeaAdvertisementDtoPaginatedList, any>({
        path: `/api/DateIdeaAdvertisement/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileCreate
     * @request POST:/api/File
     */
    fileCreate: (data: CreateUploadingUrlCommand, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/File`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileUpdateFileCreate
     * @request POST:/api/File/updateFile
     */
    fileUpdateFileCreate: (data: UpdateFileDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/File/updateFile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interest
     * @name InterestPaginatedCreate
     * @request POST:/api/Interest/paginated
     */
    interestPaginatedCreate: (
      data: GetInterestsWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<InterestDtoPaginatedList, any>({
        path: `/api/Interest/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interest
     * @name InterestCategoryFilteredCreate
     * @request POST:/api/Interest/categoryFiltered
     */
    interestCategoryFilteredCreate: (
      data: GetFilteredInterestCategoryQuery,
      params: RequestParams = {},
    ) =>
      this.request<InterestCategoryDto[], any>({
        path: `/api/Interest/categoryFiltered`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interest
     * @name InterestCreate
     * @request POST:/api/Interest
     */
    interestCreate: (data: CreateInterestCommand, params: RequestParams = {}) =>
      this.request<InterestDto, any>({
        path: `/api/Interest`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interest
     * @name InterestUpdate
     * @request PUT:/api/Interest
     */
    interestUpdate: (data: UpdateInterestCommand, params: RequestParams = {}) =>
      this.request<InterestDto, any>({
        path: `/api/Interest`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interest
     * @name InterestDelete
     * @request DELETE:/api/Interest
     */
    interestDelete: (data: DeleteInterestCommand, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Interest`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interest
     * @name InterestWithNewCategoryCreate
     * @request POST:/api/Interest/WithNewCategory
     */
    interestWithNewCategoryCreate: (
      data: CreateInterestWithNewInterestCategoryCommand,
      params: RequestParams = {},
    ) =>
      this.request<InterestDto, any>({
        path: `/api/Interest/WithNewCategory`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interest
     * @name InterestDetail
     * @request GET:/api/Interest/{id}
     */
    interestDetail: (id: string, params: RequestParams = {}) =>
      this.request<InterestDtoPaginatedList, any>({
        path: `/api/Interest/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LifePosition
     * @name LifePositionPaginatedCreate
     * @request POST:/api/LifePosition/paginated
     */
    lifePositionPaginatedCreate: (
      data: GetLifePositionsWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<LifePositionDtoPaginatedList, any>({
        path: `/api/LifePosition/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LifePosition
     * @name LifePositionCreate
     * @request POST:/api/LifePosition
     */
    lifePositionCreate: (
      data: CreateLifePositionCommand,
      params: RequestParams = {},
    ) =>
      this.request<LifePositionDto, any>({
        path: `/api/LifePosition`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LifePosition
     * @name LifePositionUpdate
     * @request PUT:/api/LifePosition
     */
    lifePositionUpdate: (
      data: UpdateLifePositionCommand,
      params: RequestParams = {},
    ) =>
      this.request<LifePositionDto, any>({
        path: `/api/LifePosition`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LifePosition
     * @name LifePositionDelete
     * @request DELETE:/api/LifePosition
     */
    lifePositionDelete: (
      data: DeleteLifePositionCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/LifePosition`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LifePosition
     * @name LifePositionDetail
     * @request GET:/api/LifePosition/{id}
     */
    lifePositionDetail: (id: string, params: RequestParams = {}) =>
      this.request<LifePositionDto, any>({
        path: `/api/LifePosition/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name AdminManagerPaginatedCreate
     * @request POST:/api/Admin/Manager/paginated
     */
    adminManagerPaginatedCreate: (
      data: GetManagersWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<ManagerDtoPaginatedList, any>({
        path: `/api/Admin/Manager/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name AdminManagerCreate
     * @request POST:/api/Admin/Manager
     */
    adminManagerCreate: (
      data: CreateManagerCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Admin/Manager`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name AdminManagerUpdate
     * @request PUT:/api/Admin/Manager
     */
    adminManagerUpdate: (
      data: UpdateManagerCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Admin/Manager`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name AdminManagerDelete
     * @request DELETE:/api/Admin/Manager
     */
    adminManagerDelete: (
      data: DeleteManagerCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Admin/Manager`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Manager
     * @name AdminManagerDetail
     * @request GET:/api/Admin/Manager/{id}
     */
    adminManagerDetail: (id: string, params: RequestParams = {}) =>
      this.request<ManagerDtoPaginatedList, any>({
        path: `/api/Admin/Manager/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reaction
     * @name ReactionGetUserPaginatedCreate
     * @request POST:/api/Reaction/get-user/paginated
     */
    reactionGetUserPaginatedCreate: (
      data: GetNextUserForReactionDto,
      params: RequestParams = {},
    ) =>
      this.request<UserMatchDtoPaginatedList, any>({
        path: `/api/Reaction/get-user/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reaction
     * @name ReactionReactCreate
     * @request POST:/api/Reaction/react
     */
    reactionReactCreate: (data: ReactionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Reaction/react`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reaction
     * @name ReactionMatchListList
     * @request GET:/api/Reaction/matchList
     */
    reactionMatchListList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Reaction/matchList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reaction
     * @name ReactionMatchDelete
     * @request DELETE:/api/Reaction/match
     */
    reactionMatchDelete: (data: DeleteMatchDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Reaction/match`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reaction
     * @name ReactionPaginatedCreate
     * @request POST:/api/Reaction/paginated
     */
    reactionPaginatedCreate: (
      data: ReactionPaginatedDto,
      params: RequestParams = {},
    ) =>
      this.request<LikedUserDtoPaginatedList, any>({
        path: `/api/Reaction/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name AdminSettingsUpdate
     * @request PUT:/api/Admin/Settings
     */
    adminSettingsUpdate: (
      data: UpdateSystemSettingCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Admin/Settings`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name AdminSettingsList
     * @request GET:/api/Admin/Settings
     */
    adminSettingsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Admin/Settings`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sms
     * @name PostApi
     * @request POST:/api/Sms
     */
    postApi: (data: SendSmsCommand, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Sms`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Statistics
     * @name StatisticsCreate
     * @request POST:/api/Statistics
     */
    statisticsCreate: (
      data: GetTotalDownloadsForMonthStatisticsQuery,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Statistics`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Statistics
     * @name StatisticsList
     * @request GET:/api/Statistics
     */
    statisticsList: (
      query?: {
        /** @format int32 */
        year?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DownLoadStatisticsForYearDto, any>({
        path: `/api/Statistics`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserCreate
     * @request POST:/api/User
     */
    userCreate: (data: RegisterUserCommand, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/User`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserList
     * @request GET:/api/User
     */
    userList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/User`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUpdate
     * @request PUT:/api/User
     */
    userUpdate: (data: UpdateUserModel, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/User`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDelete
     * @request DELETE:/api/User
     */
    userDelete: (data: DeleteUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/User`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserCoordinatesUpdate
     * @request PUT:/api/User/coordinates
     */
    userCoordinatesUpdate: (data: CoordsDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/User/coordinates`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserPaginatedCreate
     * @request POST:/api/User/paginated
     */
    userPaginatedCreate: (
      data: GetUsersWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<UserDtoPaginatedList, any>({
        path: `/api/User/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDetail
     * @request GET:/api/User/{id}
     */
    userDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/User/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AdminUserPaginatedCreate
     * @request POST:/api/Admin/User/paginated
     */
    adminUserPaginatedCreate: (
      data: GetUsersWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<UserDtoPaginatedList, any>({
        path: `/api/Admin/User/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AdminUserUpdate
     * @request PUT:/api/Admin/User
     */
    adminUserUpdate: (data: UpdateUserCommand, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Admin/User`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AdminUserDelete
     * @request DELETE:/api/Admin/User
     */
    adminUserDelete: (
      data: DeleteUserForAdminDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Admin/User`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AdminUserStatusesUpdate
     * @request PUT:/api/Admin/User/statuses
     */
    adminUserStatusesUpdate: (
      data: UpdateUsersStatusesCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Admin/User/statuses`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AdminUserDetail
     * @request GET:/api/Admin/User/{id}
     */
    adminUserDetail: (id: string, params: RequestParams = {}) =>
      this.request<UserDto, any>({
        path: `/api/Admin/User/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workplace
     * @name WorkplacePaginatedCreate
     * @request POST:/api/Workplace/paginated
     */
    workplacePaginatedCreate: (
      data: GetWorkPlaceWithPaginationParamsQuery,
      params: RequestParams = {},
    ) =>
      this.request<WorkPlaceDtoPaginatedList, any>({
        path: `/api/Workplace/paginated`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workplace
     * @name WorkplaceCreate
     * @request POST:/api/Workplace
     */
    workplaceCreate: (
      data: CreateWorkPlaceCommand,
      params: RequestParams = {},
    ) =>
      this.request<WorkPlaceDto, any>({
        path: `/api/Workplace`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workplace
     * @name WorkplaceUpdate
     * @request PUT:/api/Workplace
     */
    workplaceUpdate: (
      data: UpdateWorkPlaceCommand,
      params: RequestParams = {},
    ) =>
      this.request<WorkPlaceDto, any>({
        path: `/api/Workplace`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workplace
     * @name WorkplaceDelete
     * @request DELETE:/api/Workplace
     */
    workplaceDelete: (
      data: DeleteWorkPlaceCommand,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/Workplace`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workplace
     * @name WorkplaceDetail
     * @request GET:/api/Workplace/{id}
     */
    workplaceDetail: (id: string, params: RequestParams = {}) =>
      this.request<WorkPlaceDto, any>({
        path: `/api/Workplace/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
