<template>
  <Layout>
    <div class="h-screen dotted-background flex items-center">
      <div class="flex md:flex-row home-wrapper h-screen/2 w-2/3 rounded bg-white mx-auto px-8 py-16">
        <div class="flex-initial px-1 object-center">
          <g-image class="rounded-full" src="~/assets/images/padoramix.png" alt="My Face"/>
        </div>
        <div class="flex-initial px-1">
          <h1 class="text-3xl">Je m'appelle Grégory Devant.<br />
            Je suis <strong>développeur full stack</strong> et <strong>amoureux de la nature</strong>.</h1>
          <div class="menu-home">
            <ul class="pt-5">
              <li class="inline pr-5 "><a class="smooth-scroll rounded text-sm text-gray-500 border border-gray-400 p-2 uppercase" href="#portofolio">Réalisations</a></li>
              <li class="inline pr-5 "><a class="smooth-scroll" href="#presentation">Présentation</a></li>
              <li class="inline pr-5 "><a class="smooth-scroll" href="#technologies">Technologies</a></li>
              <li class="inline pr-5 "><a class="smooth-scroll" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <a id="start-arrow" class="smooth-scroll" href="#portofolio"><i class="icon-down-open"></i></a>
    </div>

    <div id="portofolio" class="gray-section">
      <div class="container">
        <div class="section-header">
          <h2>Portfolio</h2>
        </div>
        <div class="row">
          <!-- <% data.portofolio.portofolio.each do |project| %>
            <div class="col-md-4 col-sm-6 tag-filtered portofolio-block-wrapper visible">
              <div class="project-block">
                <a href="<%= project.url %>" target="_blank" class="project-screenshot">
                  <g-image src="~/image.png" width="500"/>
                  <i class="icon-link-ext"></i>
                  <span class="overlay"></span>
                </a>
                <!-- <div class="project-details">
                  <h3><a href="<%= project.url %>" target="_blank"><%= project.name %></a></h3>
                  <div class="where"><i class="icon-location"></i> <%= project.where %></div>
                  <div class="project-tags">
                    <% project.tags.each do |tag| %>
                      <span class="tag" data-tag="<%= tag %>"><%= tag %></span>
                    <% end %>
                  </div>
                </div> -->
              </div>
            </div>
          <!-- <% end %> -->
        </div>
      </div>
    </div>

    <div id="skills-education" class="gray-section">
      <div class="container">
        <div class="section-header">
          <h2>Compétences</h2>
        </div>
        <!-- <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <div id="skills">
              <% data.skills.skills.each do |skill_group| %>
                <div id="<%= skill_group.slug %>" class="skill-group">
                  <div class="skill-group-title">
                    <h3><%= skill_group.group %></h3>
                  </div>
                  <div class="skill-body">
                    <div>
                      <% skill_group.skills.each do |skill_set| %>
                        <ul>
                          <% skill_set.each do |skill| %>
                            <li><%= skill %></li>
                          <% end %>
                        </ul>
                      <% end %>
                    </div>
                  </div>
                </div>
              <% end %>
            </div>
          </div>
        </div><!-- end Skills -->
        <div class="section-header">
          <h2>Education</h2>
        </div>
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <!-- <div id="skills">
              <% data.education.education.each do |education| %>
                <div class="education-block">
                  <div class="education-header">
                    <h3><%= education.title %></h3>
                    <h4><%= education.subtitle %></h4>
                    <p><a href="http://maps.google.com/?q=<%= education.location %>" target="_blank"><i class="icon-location"></i><%= education.location %></a></p>
                  </div>
                </div>
              <% end %>
            </div> -->
          </div>
        </div><!-- end Education -->
      </div>
    </div>
  </Layout>
</template>

<!-- <page-query>
  query {
    metadata {
      education {
        title
        subtitle
      }
    }
  }
</page-query> -->

<script>
import Layout from '~/layouts/Basic.vue'

// import 

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Layout
  }
}
</script>

<style lang="scss">
// Background-colors for homepage
$bg-color: hsl(255,250,236);
$dot-color: rgb(210, 209, 212);

// Dimensions for background
$dot-size: 1px;
$dot-space: 2px;

.dotted-background{
  background:
  linear-gradient(90deg, $bg-color ($dot-space - $dot-size), transparent 1%) center,
  linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
  $dot-color;
  background-size: $dot-space $dot-space;
}

.home-links a {
  margin-right: 1rem;
}
</style>
