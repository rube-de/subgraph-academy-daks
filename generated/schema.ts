// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TransferEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("destination", Value.fromBytes(Bytes.empty()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("transaction", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TransferEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransferEvent", id.toString(), this);
    }
  }

  static load(id: string): TransferEvent | null {
    return changetype<TransferEvent | null>(store.get("TransferEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get destination(): Bytes {
    let value = this.get("destination");
    return value!.toBytes();
  }

  set destination(value: Bytes) {
    this.set("destination", Value.fromBytes(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transaction(): Bytes {
    let value = this.get("transaction");
    return value!.toBytes();
  }

  set transaction(value: Bytes) {
    this.set("transaction", Value.fromBytes(value));
  }
}
