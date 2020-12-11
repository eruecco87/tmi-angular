import * as webpack from 'webpack';
import * as MergeJson from 'merge-jsons-webpack-plugin';
import * as WebpackDashboard from 'webpack-dashboard/plugin';

const LANGUAGES = ['english', 'español'];

export default {
    plugins: [
        new WebpackDashboard(),
        new MergeJson({
            debug: true,
            output: {
                groupBy: LANGUAGES.map((language: string) => {

                    return {
                        pattern: `./src/app/**/${ language }.json`,
                        fileName: `./assets/i18n/${ language }.json`
                    };

                })
            },
            globOptions: {
                nosort: true
            }
        })
    ]
} as webpack.Configuration;
