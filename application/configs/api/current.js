import { api_list } from "./list";
import {ENVIRONMENT_CURRENT} from "../environments/current";

/**
 * A api indicada
 */
export const API_CURRENT = "localhost";

/**
 * A url da api indicada, baseada no ambiente atual
 */
export const API_URL = api_list[ENVIRONMENT_CURRENT][API_CURRENT];

/**
 * A url com /houpa/controller
 */

export const API_URL_HOUPA = API_URL.replace('\/houpa\/');
