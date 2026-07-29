
-- Storage policies for site-assets bucket
CREATE POLICY "site-assets: users upload to own folder"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'site-assets'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "site-assets: users update own files"
ON storage.objects FOR UPDATE TO authenticated
USING (
  bucket_id = 'site-assets'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "site-assets: users delete own files"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'site-assets'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "site-assets: authenticated read own files"
ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'site-assets'
  AND (storage.foldername(name))[1] = auth.uid()::text
);
