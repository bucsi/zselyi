---
elnokseg-adatok: !file elnok-data.yaml
medve-adatok: !file medve-data.yaml
fb-adatok: !file fb-data.yaml
---

# Elérhetőségek

## Címek
1165 Budapest,
- Zsélyi Aladár utca 7-17.
- Hunyadvár utca 18-22.

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