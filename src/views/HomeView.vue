<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-md-10">
        <div class="card shadow-sm">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <i class="bi bi-chevron-right"></i>
                    <div class="badge bg-warning rounded-pill">To Do Dev</div>
                  </li>
                </ol>
              </nav>
              <div>
                <strong class="me-2">
                  <i class="bi bi-files-alt"></i>
                  <span class="ms-2">{{ allPosts.length }}</span>
                </strong>
                <div
                  class="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="card = true"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    <i class="bi bi-gear"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <ul v-if="errors.length">
              <li v-for="error in errors" :key="error">
                <span class="text-danger">{{ error }}</span>
              </li>
            </ul>
            <div class="mt-3 mb-3" v-if="card">
              <div class="mb-2">
                <input
                  type="text"
                  v-model="form.title"
                  id=""
                  class="form-control"
                />
                <small class="text-danger" v-if="errors.length">{{
                  errors[0].title
                }}</small>
              </div>
              <div class="mb-2">
                <textarea
                  v-model="form.deskripsi"
                  class="form-control"
                ></textarea>
              </div>
              <div class="mb-2">
                <button
                  type="button"
                  @click="store"
                  class="btn btn-primary btn-sm"
                >
                  <i class="bi bi-save"></i> Simpan
                </button>
                <button
                  type="button"
                  @click="batal"
                  class="btn btn-danger ms-2 btn-sm"
                >
                  <i class="bi bi-x-circle"></i> Batal
                </button>
              </div>
            </div>
            <div
              class="list-group mb-2 shadow-sm border-0"
              v-for="pos in allPosts"
              :key="pos"
            >
              <div
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ pos.title }}</h5>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <p class="mb-1">{{ pos.deskripsi }}</p>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="mb-1 text-decoration-none text-danger"
                      @click="deletePost(pos.id)"
                      ><i class="bi bi-trash"></i> Assigne</a
                    >
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
import { mapGetters, mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  name: "HomeView",
  data: () => ({
    form: {
      title: "",
      deskripsi: "",
    },
    card: false,
    errors: [],
  }),
  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: {
    ...mapActions(["addPost", "deletePost"]),
    store() {
      if (!this.form.title) {
        this.errors.push("Title required.");
      } else {
        this.addPost({
          id: v1(),
          title: this.form.title,
          deskripsi: this.form.deskripsi,
        });
        this.formClear();
      }
    },

    batal() {
      this.formClear();
    },

    formClear() {
      this.form.title = "";
      this.form.deskripsi = "";
      this.card = false;
      this.errors = [];
    },
  },
};
</script>
