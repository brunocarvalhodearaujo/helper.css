Helper.css
========

helper css classes allow you to build your custom layout without touching any CSS code

these classes are generic helper classes predifined in the CSS of pages, here is quick view what they can do
  - Set margins - Available for all directions from 5 - 90 px stepping value 5px
  - Set padding - Available for all directions from 5 - 90 px stepping value 5px
  - Set border - Available for all sides, default pages border color
  - Border Radius - Option to set border radius, size sm / md / lg

## Margins

You can add this helper class to any element in your HTML code to set Margins

FIRST PREFIX ( M-*) | SECOND PREFIX(M-T/B/L/R-*) | LAST PREFIX(M-T-$VALUE)
|-------------------|-----------------------------|--------------------------|
m for margin |	t : top, b : bottom, l : left, r : right |	5,10,15,20, ... 90

### EXAMPLE
  - `m-t-10` which means Margin Top 10px
  - `m-b-20` which means Margin Bottom 20px
  - `m-l-5` which means Margin Left 5px
  - `m-r-35` which means Margin Right 35px

### RULE

Value can not be anything, 1,2,4,5,6. It has a step of 5px, eg: 5,10,15

### OTHER OPTIONS
To remove margin from a HTML element add the class `no-margin`

`````html
<div class="m-t-10">
  I have a 10px margin in bottom
</div>
`````


## Padding

You can add this helper class to any element in your HTML code to set Padding

FIRST PREFIX ( P-*) | SECOND PREFIX(P-T/B/L/R-*) |	LAST PREFIX(P-T-$VALUE)
|-------------------|-----------------------------|--------------------------|
p for padding |	t : top, b : bottom, l : left, r : right |	5,10,15,20,... 90

### EXAMPLE :

  - `p-t-10` which means Padding Top 10px
  - `p-b-20` which means Padding Bottom 20px
  - `p-l-5` which means Padding Left 5px
  - `p-r-35` which means Padding Right 35px

### RULE
Value can not be anything, 1,2,4,5,6. It has a step of 5px, eg: 5,10,15

### OTHER OPTIONS
To remove padding from a HTML element add the class `no-padding`

### EXAMPLE :

`````html
<div class="p-t-10">
  I have a 10px padding in bottom
</div>
`````

## Border

You can add this helper class to any element in your HTML code to set Border, border currently supports one pixel

FIRST PREFIX ( B-*)	| SECOND PREFIX(B-T/B/L/R/A-*)
|-------------------|-----------------------------|
b for border | t : top, b : bottom, l : left, r : right, a : all

### Border Style
  - `b-dashed` - change the border style to 'dashed'
  - `b-thick` - change the border width to 2px

### Border Radius

Helpy class to apply quick border radius.
  - `b-rad-sm` 3px border radius
  - `b-rad-md` 5px border radius
  - `b-rad-lg` 7px border radius

### EXAMPLE :

`````html
<div class="b-b">
  I have a bottom border
</div>
`````

## Absolute positioning

Makes elements to have `position:absolute`. Add .relative to the parent of the element
that you want to be absolute to have relative positioning

````html
<div class="relative" style="height:300px">
    <!-- Equivalent to "pull-up" -->
    <div class="top-left bg-master-light text-center padding-20">Top-left</div>
    <!-- Equivalent to "pull-bottom" -->
    <div class="bottom-left bg-master-light text-center padding-20">Bottom-left</div>
    <div class="top-right bg-master-light text-center padding-20">Top-right</div>
    <div class="bottom-right bg-master-light text-center padding-20">Bottom-right</div>
</div>
````

## Font Size

If you wish to change the default font size, then you can apply the following classes,
accept 5,10,15,...,100

`````html
<!-- In Font Size 5 -->
<p class="fs-5">Font Size 5px </p>

<!-- In Font Size 10 -->
<p class="fs-10">Font Size 10px </p>

<!-- In Font Size 15 -->
<p class="fs-15">Font Size 15px </p>
`````

## Font Weights

````html
<!-- Heading Light Weight -->
<h5 class="light">Thinnest</h5>

<!-- Heading Semi-bold Weight -->
<h5 class="semi-bold">Semi-bold</h5>

<!-- Heading bold Weight -->
<h5 class="bold">Most Boldest</h5>
````

## Misc. classes

CLASS NAME | DESCRIPTION
|----------|------------|
`full-width` | Spans the element to have 100% width of the parent
`full-height` | Spans the element to have 100% height of the parent
`scrollable` | dds overflow-y:auto
`center-margin` | Adds `margin-left:auto; margin-right:auto`. Useful when center aligning any div
`hide` | Hides any element
`inline` | Adds display:inline-block
`break-word`| Adds breaking line word
