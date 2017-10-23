---
layout: page
title: Projects
permalink: /projects/
---



<div class="projects-wrapper">


{% assign projects = site.projects | sort: 'order' %}

{% for project in projects %}
   

<div id ="{{ project.slug }}" class="project-item  {{project.item-class }}
">

<div class="project-main {{project.size-class}}">
<div class="project-meta">
	<!--<div class="project-headings">
  	<h2>{{ project.title }}</h2>
    <h2 style="text-align: right;">{{ project.category }}</h2>
    </div>-->
    <div style="background: {{ project.bg }}" class="project-image">

    {% if project.projectsimg != null %}
<div class="img-wrap"><a href="{{project.url}}"><img src="{{ project.projectsimg }}" /></a></div>

{% elsif project.projectvid != null %}

<div class="vid-wrapper"><video autoplay loop><source src="{{ project.projectvid }}" type="video/mp4"></video></div>

{% else %}

<div class="con-wrapper">{{ project.content }}</div>

      {% endif %}


 
  </div>
</div>
</div>
<div class="project-description {{ project.desc-pos }}">

  <h3>{{ project.title }}</h3>
    <p class="small">{{ project.category }} | {{ project.date-added }}</p>

  <p>{{ project.description }}</p>

  {% if project.url != null %}

  <p><a href="{{ project.custom-url }}" target="_blank">{{project.custom-url}}</a></p>

  {% endif %}

  {% if project.note != null %}

  <p>{{project.note}}</p>

  {% endif %}


  </div>

</div>
 
{% endfor %}


</div>



