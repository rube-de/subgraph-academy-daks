import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Approval,
  ClaimCleared,
  ClaimDeleted,
  ClaimMade,
  ClaimPeriodChanged,
  ClaimResolved,
  CustomClaimCollateralChanged,
  MigrationSucceeded,
  Transfer
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.claimPeriod(...)
  // - contract.claims(...)
  // - contract.customCollateralAddress(...)
  // - contract.customCollateralRate(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.factory(...)
  // - contract.getClaimDeleter(...)
  // - contract.getClaimant(...)
  // - contract.getCollateral(...)
  // - contract.getCollateralRate(...)
  // - contract.getCollateralType(...)
  // - contract.getTimeStamp(...)
  // - contract.increaseAllowance(...)
  // - contract.isBinding(...)
  // - contract.isRecoveryEnabled(...)
  // - contract.name(...)
  // - contract.offer(...)
  // - contract.quorum(...)
  // - contract.recoveryDisabled(...)
  // - contract.symbol(...)
  // - contract.terms(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferAndCall(...)
  // - contract.transferFrom(...)
  // - contract.unwrapConversionFactor(...)
  // - contract.votePeriod(...)
  // - contract.wrapped(...)
}

export function handleClaimCleared(event: ClaimCleared): void {}

export function handleClaimDeleted(event: ClaimDeleted): void {}

export function handleClaimMade(event: ClaimMade): void {}

export function handleClaimPeriodChanged(event: ClaimPeriodChanged): void {}

export function handleClaimResolved(event: ClaimResolved): void {}

export function handleCustomClaimCollateralChanged(
  event: CustomClaimCollateralChanged
): void {}

export function handleMigrationSucceeded(event: MigrationSucceeded): void {}

export function handleTransfer(event: Transfer): void {}
