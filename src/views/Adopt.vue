<script setup lang="ts">
import { area, adoptPlace } from "@/utils/adopt";
import { http } from "@/utils/http";
import { reactive } from "vue";

const adoptParams = reactive({
  areaId: 0,
})

const petData = reactive({
  items: []
})

async function getAdoptData() {
  try {
    const resp = await http.get('?UnitId=QcbUEzN6E6DL', {
      params: {
        animal_area_pkid: 2,
        '$top': 10,
      }
    })

    if (resp.status !== 200) {
      return
    }
    petData.items = resp.data.map((data: any) => {
      return {
        id: data.animal_id,
        pic: data.album_file,
        updateTime: data.animal_update,
        remark: data.animal_remark,
        color: data.animal_colour,
        kind: data.animal_kind,
        variety: data.animal_Variety,
        sex: data.animal_sex === "M" ? "公" : "母",

      }
    })
  } catch (error) {
    throw new Error("get data failed");
  }
}

</script>
<template>
  <div class="flex justify-center items-center space-x-5">
    <div>
      <label for="area">縣市</label>
      <select id="area" class="select select-bordered w-full max-w-xs">
        <option v-for="(areaItem, areaIndex) in area" :key="`area__${areaIndex}`" :value="areaItem">{{ areaItem }}
        </option>
      </select>
    </div>
    <div>
      <label for="place">地區</label>
      <select v-model="adoptParams.areaId" id="place" class="select select-bordered w-full max-w-xs">
        <option v-for="(place, placeIndex) in adoptPlace" :key="`place__${placeIndex}`" :value="placeIndex">{{ place }}
        </option>
      </select>
    </div>
    <button class="btn btn-secondary self-end" @click="getAdoptData">搜尋</button>
  </div>

  <section class="mt-20 flex flex-wrap justify-around">
    <div v-for="pet in petData.items" :key="pet.id" class="card w-80 my-5 shadow-xl p-2">
      <figure>
        <img :src="pet.pic" class="w-[280px] h-[250px]" alt="無圖片可顯示" />
      </figure>
      <div class="card-body flex flex-col justify-center">
        <span><font-awesome-icon class="mr-1" icon="fa-solid fa-hashtag" />編號：{{ pet.id }}</span>
        <span><font-awesome-icon class="mr-1" icon="fa-solid fa-tags" />種類：{{ pet.variety }}</span>
        <span><font-awesome-icon class="mr-1" icon="fa-solid fa-venus-mars" />性別：{{ pet.sex }}</span>
        <span><font-awesome-icon class="mr-1" icon="fa-solid fa-paw" />顏色：{{ pet.color }}</span>
      </div>
      <button class="btn btn-neutral w-1/2 self-center">詳細資料</button>
    </div>
  </section>
</template>