import { DeltaOperation, StringMap } from "quill";

export interface DeltaStatic {
   ops?: DeltaOperation[];
   retain(length: number, attributes?: StringMap): DeltaStatic;
   delete(length: number): DeltaStatic;
   filter(predicate: (op: DeltaOperation) => boolean): DeltaOperation[];
   forEach(predicate: (op: DeltaOperation) => void): void;
   insert(text: any, attributes?: StringMap): DeltaStatic;
   map<T>(predicate: (op: DeltaOperation) => T): T[];
   partition(
      predicate: (op: DeltaOperation) => boolean
   ): [DeltaOperation[], DeltaOperation[]];
   reduce<T>(
      predicate: (
         acc: T,
         curr: DeltaOperation,
         idx: number,
         arr: DeltaOperation[]
      ) => T,
      initial: T
   ): T;
   chop(): DeltaStatic;
   length(): number;
   slice(start?: number, end?: number): DeltaStatic;
   compose(other: DeltaStatic): DeltaStatic;
   concat(other: DeltaStatic): DeltaStatic;
   diff(other: DeltaStatic, index?: number): DeltaStatic;
   eachLine(
      predicate: (line: DeltaStatic, attributes: StringMap, idx: number) => any,
      newline?: string
   ): DeltaStatic;
   transform(index: number, priority?: boolean): number;
   transform(other: DeltaStatic, priority: boolean): DeltaStatic;
   transformPosition(index: number, priority?: boolean): number;
}

export type Sources = "api" | "user" | "silent";
