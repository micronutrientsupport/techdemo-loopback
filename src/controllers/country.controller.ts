import {

  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef
} from '@loopback/rest';
import {Country} from '../models';
import {CountryRepository} from '../repositories';

export class CountryController {
  constructor(
    @repository(CountryRepository)
    public countryRepository: CountryRepository,
  ) {}

  @get('/countries', {
    responses: {
      '200': {
        description: 'Array of Country model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Country, {includeRelations: false}),
            },
          },
        },
      },
    },
  })
  async find(
  ): Promise<Country[]> {
    return this.countryRepository.find();
  }

}
