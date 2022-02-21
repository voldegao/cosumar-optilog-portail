<script>
    import Spot from './Spot.svelte';
    import {getQuais,quais} from "../apiStore.js";
    import { onMount } from 'svelte';
    
    onMount(async () => {
       const interval =  setInterval(getQuais,60000);
       getQuais()
       return () => clearInterval(interval);
	});
    let q 
    quais.subscribe((value) => {
        console.log(value)
        q = value
    });

</script>

<div class="flex justify-between mt-4">
    <Spot type={'central'} quai={1} matricule={q.quai_1_matricule}  time={q.quai_1_delai}  objectif={q.quai_1_objectif}/>
    <Spot type={'central'} quai={2} matricule={q.quai_2_matricule} time={q.quai_2_delai}  objectif={q.quai_2_objectif}/>
    <Spot type={'central'} quai={3} matricule={q.quai_3_matricule} time={q.quai_3_delai}  objectif={q.quai_3_objectif}/>
    <Spot type={'central'} quai={4} matricule={q.quai_4_matricule} time={q.quai_4_delai}  objectif={q.quai_4_objectif}/>
    <Spot type={'central'} quai={5} matricule={q.quai_5_matricule} time={q.quai_5_delai}  objectif={q.quai_5_objectif}/>
    <Spot type={'central'} quai={6} matricule={q.quai_6_matricule} time={q.quai_6_delai}  objectif={q.quai_6_objectif}/>
    <Spot type={'central'} quai={7} matricule={q.quai_7_matricule} time={q.quai_7_delai}  objectif={q.quai_7_objectif}/>
    <Spot type={'central'} quai={8} matricule={q.quai_8_matricule} time={q.quai_8_delai}  objectif={q.quai_8_objectif}/>
    <Spot type={'central'} quai={9} matricule={q.quai_9_matricule} time={q.quai_9_delai}  objectif={q.quai_9_objectif}/>
    <Spot type={'central'} quai={10} matricule={q.quai_10_matricule} time={q.quai_10_delai}  objectif={q.quai_10_objectif}/>
    <Spot type={'central'} quai={11} matricule={q.quai_11_matricule} time={q.quai_11_delai}  objectif={q.quai_11_objectif}/>
       
    <Spot type={'maamoura'} quai={1} matricule={q.quai_1_matricule_maamoura} time={q.quai_1_delai_maamoura}  objectif={q.quai_1_objectif_maamoura}/>
    <Spot type={'maamoura'} quai={2} matricule={q.quai_2_matricule_maamoura} time={q.quai_2_delai_maamoura} objectif={q.quai_2_objectif_maamoura} />
    <Spot type={'maamoura'} quai={3} matricule={q.quai_3_matricule_maamoura} time={q.quai_3_delai_maamoura}  objectif={q.quai_3_objectif_maamoura}/>
</div>
