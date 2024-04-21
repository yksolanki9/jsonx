export const isBooleanTrue = (val: string) => val === "true";

export const isBooleanFalse = (val: string) => val === "false";

export const isNull = (val: string) => val === "null";

export const isNumber = (val: string) => !isNaN(Number(val));
