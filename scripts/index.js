import * as Minecraft from "@minecraft/server"


Minecraft.world.afterEvents.playerInteractWithEntity.subscribe((event) => {
    if (event.player.isSneaking && event.target.getComponent("is_tamed")?.isValid()) {
        event.target.dimension.spawnParticle("minecraft:heart_particle", { x: event.target.location.x, y: event.target.location.y + 1.5, z: event.target.location.z })
    }
})

Minecraft.world.afterEvents.worldInitialize.subscribe(() => {
    console.warn("[Pat the Pet] Loaded Addon")
})