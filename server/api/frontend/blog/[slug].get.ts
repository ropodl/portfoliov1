import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
  const slug = <string>getRouterParam(event, "slug");

  const client = await serverSupabaseClient(event);

  const { data: blog, error } = await client
    .from("blogs")
    .select()
    .eq("slug", slug)
    .single();

  if (error) return console.log("error" + error.message);

  console.log(blog);
  return blog;
});
