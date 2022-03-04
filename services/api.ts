import { GraphQLClient } from 'graphql-request';
import routes from '@config/routes'
import { getThingsQuery, getThingByIdQuery } from './queries/things';

const graphcms = new GraphQLClient(
    routes.api
);

export const getThings = async () => await graphcms.request(getThingsQuery())

export const getThingById = async (id) => await graphcms.request(getThingByIdQuery(id))
  