# Fullstackopen osa3

Palvelu on asennettu aws:ään:

http://fullstackopen-osa3-front.mjngnnwi2k.eu-north-1.elasticbeanstalk.com/

Backend löytyy erikseen http://fullstackopen-osa3-backend.eu-north-1.elasticbeanstalk.com/

- Deploy tapahtuu `npm deploy`
- Gittiin ei ole lisätty _build_ hakemistoa vaan beanstalkissa ajetaan [serve](http://npmjs.com/package/serve) palvelulla build hakemistoa, jonka beanstalk kääntää ensiksi.
- Samat komennot backend repoissa

