function getUnixTimestamp(date: Date | string): number {
  return new Date(date).getTime();
}

export default getUnixTimestamp;
