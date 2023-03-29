import { db } from "./dogbribes.js";
import { DEV } from "../devops/environmentVariables.js";

let commands = [db]

commands.forEach(command => command.definition = command.definition.toJSON())

commands = commands.filter(command => !command.disabled)

if(DEV){
  commands.forEach(command => {
    command.name            = `dev-${command.definition.name}`
    command.definition.name = `dev-${command.definition.name}`
  })
} else {
  commands.forEach(command => {
    command.name            = command.definition.name
  })
}

export { commands };