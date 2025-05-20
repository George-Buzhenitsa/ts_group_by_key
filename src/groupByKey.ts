type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[],
  key: keyof object,
): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  for (const item of items) {
    if (!(item[key] in result)) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  }

  return result;
}
