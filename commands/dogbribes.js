import { SlashCommandBuilder } from 'discord.js';
import * as dogbribes from './dogbribes/index.js';

const db = {
  definition:
    new SlashCommandBuilder()
      .setName('dogbribes')
      .setDescription('Print out basic save information'),
  action: async (interaction) => {
    const user_id = interaction.user.id

    await interaction.reply(`Getting user save data...`);
    const save_data = await dogbribes.getSaveData(user_id)
    await interaction.editReply(`${save_data}`);
  }
}

export { db }