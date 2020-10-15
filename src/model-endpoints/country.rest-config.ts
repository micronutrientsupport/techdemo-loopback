import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Country} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Country,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/countries',
};
module.exports = config;
