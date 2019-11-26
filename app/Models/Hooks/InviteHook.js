"use strict";

const InviteHook = (exports = module.exports = {});
const User = use("App/Models/User");
InviteHook.sendInvitationEmail = async invite => {
  const { email } = invite;

  const invited = await User.findBy("email", email);
  if (invited) {
    invited.teams().attach(invite.team_id);

  }else{
    console.log('CRIAR CONTA')

    //Envio de email
  }
};
