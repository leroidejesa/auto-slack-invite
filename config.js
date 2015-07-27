module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'epicodus-spr2015-ruby',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'epicodus-spr2015-ruby.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-4943763046-4943763050-8271653905-86db85'
};
