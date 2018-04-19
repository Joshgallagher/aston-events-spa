<template>
  <div>
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-6">

            <div class="box">
              <div class="columns">
                <div class="column is-11">
                  <a href="#" class="title is-5">
                    <span class="is-7 has-text-primary has-text-weight-normal">Joshua Gallagher organised</span>
                    Aston Tigers (American Football)
                  </a>
                </div>
                <div class="column is-1 has-text-right">
                  <b-icon
                    pack="mdi"
                    icon="heart"
                    size="is-small"
                    type="is-danger">
                  </b-icon>
                  10
                </div>
              </div>
              <div class="columns">
                <div class="date-column column">
                  <b-icon
                    pack="mdi"
                    icon="clock"
                    size="is-small">
                  </b-icon>
                  <span>12th June 2018 @ 1:00PM</span>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum deserunt, quia consectetur? Maxime accusantium neque dignissimos, assumenda tenetur delectus reiciendis voluptate eaque quos repellat nisi necessitatibus odio, officia aliquam.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-index'
}
</script>

<style lang="sass">
.date-column
  padding-top: 0
</style>
