import { PageData } from '@core/services/layout/models/page-data.model';

export class RouteConfiguration {
    pageData?: PageData;

    constructor(data?: RouteConfiguration) {
        this.pageData = data && data.pageData ? data.pageData : null;
    }
}
