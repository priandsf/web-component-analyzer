import { AnalyzerVisitContext } from "../analyzer-visit-context";

export function executeFunctionsUntilMatch<
	T extends Partial<Record<K, any>>,
	K extends keyof T,
	ReturnValue extends ReturnType<NonNullable<T[K]>>,
	ArgType
>(
	functionMaps: T[],
	keys: K | K[],
	arg: ArgType,
	context: AnalyzerVisitContext
): { value: NonNullable<ReturnValue>; shouldContinue?: boolean } | undefined {
	keys = Array.isArray(keys) ? keys : [keys];

	for (const key of keys) {
		// Loop through each function
		for (const functionMap of functionMaps) {
			const func = functionMap[key];

			if (func == null) continue;

			// Save a "continue" flag if necessary
			let shouldContinue = false;
			const result = func(arg, {
				...context,
				emitContinue() {
					shouldContinue = true;
				}
			});

			// Return a result if not undefined
			if (result != null) {
				return { value: result as NonNullable<ReturnValue>, shouldContinue };
			}
		}
	}

	return undefined;
}