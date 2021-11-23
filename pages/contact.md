---
elnokseg-adatok: !file elnok-data.yaml
medve-adatok: !file medve-data.yaml
fb-adatok: !file fb-data.yaml
---

# Elérhetőségek
A Zsélyi Aladár Lakásfenntartó Szövetkezet a volt Jókai Lakótelep 12-es épülete, A Zsélyi Aladár utca 7-17. és a Hunyadvár utca 18-22. számok alatt.

Levelezési cím: 1165 Budapest, Hunyadvár utca 20.

## Üzemeltetés
<section class="two columns">
{{#medve-adatok}}
<div class="primary card">
    <strong>{{info}}</strong><br>
    {{name}}
</div>
{{/medve-adatok}}
</section>


## Ügyvezető elnök
<section class="three columns">
{{#elnokseg-adatok}}
<div class="primary card">
    <strong>{{info}}</strong><br>
    {{name}}
</div>
{{/elnokseg-adatok}}
</section>

## Felügyelő bizottság
<section class="four columns">
{{#fb-adatok}}
<div class="primary card">
    <strong>{{info}}</strong><br>
    {{name}}
</div>
{{/fb-adatok}}
</section>