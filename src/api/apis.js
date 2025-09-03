import { request } from "@/utils/request.js";

/**
 *
 * 获取nba数据
 */
export function apiNbaData() {
  return request({
    url: "/api/match/playerranking/match/NBA/tabId/60",
  });
}
