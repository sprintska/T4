alter table "public"."MatchPlayer" drop constraint "MatchPlayer_player_id_fkey",
  add constraint "MatchPlayer_user_id_fkey"
  foreign key ("player_id")
  references "public"."User"
  ("id") on update restrict on delete restrict;
