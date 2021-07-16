import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '_1',
    title:'INTRACRANIAL HAEMORRHAGE'
  },
  {
    id: '_2',
    title: 'Intracranial hemorrhage (ICH) is bleeding within the skull. Subtypes are intracerebral bleeds (intraventricular bleeds and intraparenchymal bleeds), subarachnoid bleeds, epidural bleeds, and subdural bleeds.',
    
  },
  {
    id: '_3',
    title: 'Signs and symptoms: Intracranial hemorrhage is a serious medical emergency because the buildup of blood within the skull can lead to increases in intracranial pressure, which can crush delicate brain tissue or limit its blood supply. Severe increases in intracranial pressure (ICP) can cause brain herniation.',
  },
  {
    id: '_4',
    title: 'Causes: Intracranial bleeding occurs when a blood vessel within the skull is ruptured or leaks. It can result from physical trauma or nontraumatic causes (as occurs in hemorrhagic stroke) such as a ruptured aneurysm. Anticoagulant therapy, as well as disorders with blood clotting can heighten the risk that an intracranial hemorrhage will occur. More than half of all cases of intracranial hemorrhage are the result of hypertension.',
  },
  {
    id: '_5',
    title: 'Classification: Intra-axial bleed: Intra-axial hemorrhage is bleeding within the brain itself, or cerebral hemorrhage. This category includes intraparenchymal hemorrhage, and intraventricular hemorrhage (particularly of premature infants). Intra-axial hemorrhages are more dangerous and harder to treat than extra-axial bleeds. Extra-axial bleed Extra-axial hemorrhage, bleeding that occurs within the skull but outside of the brain tissue, falls into three subtypes: Epidural hemorrhage (extradural hemorrhage) which occur between the dura mater (the outermost meninx) and the skull, is caused by trauma. It may result from laceration of an artery, most commonly the middle meningeal artery. This is a very dangerous type of injury because the bleed is from a high-pressure system and deadly increases in intracranial pressure can result rapidly. However, it is the least common type of meningeal bleeding and is seen in 1% to 3% cases of head injury. Patients have a loss of consciousness (LOC), then a lucid interval, then sudden deterioration (vomiting, restlessness, LOC) Head CT shows lenticular (convex) deformity. Subdural hemorrhage results from tearing of the bridging veins in the subdural space between the dura and arachnoid mater. Head CT shows crescent-shaped deformity Subarachnoid hemorrhage (SAH), which occur between the arachnoid and pia meningeal layers, like intraparenchymal hemorrhage, can result either from trauma or from ruptures of aneurysms or arteriovenous malformations. Blood is seen layering into the brain along sulci and fissures, or filling subarachnoid cisterns (most often the chiasmatic cistern because of the presence of the anterior cerebral arteries of the circle of Willis and their branchpoints within that space). The classic presentation of subarachnoid hemorrhage is the sudden onset of a severe headache (a thunderclap headache). SAH is considered a form of stroke, despite technically being extra-axial. Confirmed spontaneous SAH requires further investigations as to the source of the bleeding, as the bleeding may recur without intervention.',
  },
  {
    id: '_6',
    title: 'INTRACRANIL TUMOURS'
  },
    {
      id: '_7',
      title: 'A brain tumor occurs when abnormal cells form within the brain. There are two main types of tumors: malignant tumors and benign tumors. These can be further classified as primary tumors, which start within the brain, and secondary tumors, which most commonly have spread from tumors located outside the brain, known as brain metastasis tumors. All types of brain tumors may produce symptoms that vary depending on the size of the tumor and the part of the brain that is involved. Where symptoms exist, they may include headaches, seizures, problems with vision, vomiting and mental changes. Other symptoms may include difficulty walking, speaking, with sensations, or unconsciousness.'
    },
    {
      id: '_8',
      title: 'The cause of most brain tumors is unknown. Uncommon risk factors include exposure to vinyl chloride, Epstein–Barr virus, ionizing radiation, and inherited syndromes such as neurofibromatosis, tuberous sclerosis, and von Hippel-Lindau Disease. Studies on mobile phone exposure have not shown a clear risk. The most common types of primary tumors in adults are meningiomas (usually benign) and astrocytomas such as glioblastomas. In children, the most common type is a malignant medulloblastoma. Diagnosis is usually by medical examination along with computed tomography (CT) or magnetic resonance imaging (MRI). The result is then often confirmed by a biopsy. Based on the findings, the tumors are divided into different grades of severity.'
    },
    {
      id: '_9',
      title: 'Treatments that use a person immune system are being studied. Outcomes for malignant tumors vary considerably depending on the type of tumor and how far it has spread at diagnosis. Although benign tumors only grow in one area, they may still be life-threatening depending on their size and location. Malignant Glioblastomas usually have very poor outcomes, while benign meningiomas usually have good outcomes. The average five-year survival rate for all (malignant) brain cancers in the United States is 33%.'
    },
    {
      id: '_10',
      title: 'Secondary, or metastatic, brain tumors are about four times as common as primary brain tumors, with about half of metastases coming from lung cancer. Primary brain tumors occur in around 250,000 people a year globally, and make up less than 2% of cancers. In children younger than 15, brain tumors are second only to acute lymphoblastic leukemia as the most common form of cancer. In Australia, the average lifetime economic cost of a case of brain cancer is $1.9 million, the greatest of any type of cancer.'
    },
    {
      id: '_11',
      title: 'Benign brain tumors often show up as hypodense (darker than brain tissue) mass lesions on CT scans. On MRI, they appear either hypodense or isointense (same intensity as brain tissue) on T1-weighted scans, or hyperintense (brighter than brain tissue) on T2-weighted MRI, although the appearance is variable. Contrast agent uptake, sometimes in characteristic patterns, can be demonstrated on either CT or MRI scans in most malignant primary and metastatic brain tumors. Pressure areas where the brain tissue has been compressed by a tumor also appear hyperintense on T2-weighted scans and might indicate the presence a diffuse neoplasm due to an unclear outline. Swelling around the tumor known as peritumoral edema can also show a similar result. This is because these tumors disrupt the normal functioning of the BBB and lead to an increase in its permeability. More recently, advancements have been made to increase the utility of MRI in providing physiological data that can help to inform diagnosis and prognosis. Perfusion Weighted Imaging (PWI) and Diffusion Weighted Imaging (DWI) are two MRI techniques that reviews have been shown to be useful in classifying tumors by grade, which was not previously viable using only structural imaging.[ However, these techniques cannot alone diagnose high- versus low-grade gliomas, and thus the definitive diagnosis of brain tumor should only be confirmed by histological examination of tumor tissue samples obtained either by means of brain biopsy or open surgery. The histological examination is essential for determining the appropriate treatment and the correct prognosis. This examination, performed by a pathologist, typically has three stages: interoperative examination of fresh tissue, preliminary microscopic examination of prepared tissues, and follow-up examination of prepared tissues after immunohistochemical staining or genetic analysis.'
    },
    {
      id: '_12',
      title: 'Classification: Tumors can be benign or malignant, can occur in different parts of the brain, and may be classified as primary or secondary. A primary tumor is one that has started in the brain, as opposed to a metastatic tumor, which is one that has spread to the brain from another area of the body. The incidence of metastatic tumors is approximately four times greater than primary tumors. Tumors may or may not be symptomatic: some tumors are discovered because the patient has symptoms, others show up incidentally on an imaging scan, or at an autopsy. Grading of the tumors of the central nervous system commonly occurs on a 4-point scale (I-IV) created by the World Health Organization in 1993. Grade I tumors are the least severe and commonly associated with long term survival, with severity and prognosis worsening as the grade increases. Low grade tumors are often benign, while higher grades are aggressively malignant and/or metastatic. Other grading scales do exist, many based upon the same criteria as the WHO scale and graded from I-IV.'
    },
    {
      id: '_13',
      title: 'Primary: The most common primary brain tumors are: Gliomas (50.4%) Meningiomas (20.8%) Pituitary adenomas (15%) Nerve sheath tumors (10%)'
    },
    {
      id: '_14',
      title: 'Secondary: Secondary tumors of the brain are metastatic and have invaded the brain from cancers originating in other organs. This means that a cancerous neoplasm has developed in another organ elsewhere in the body and that cancer cells have leaked from that primary tumor and then entered the lymphatic system and blood vessels. They then circulate through the bloodstream, and are deposited in the brain. There, these cells continue growing and dividing, becoming another invasive neoplasm of the primary cancer tissue. Secondary tumors of the brain are very common in the terminal phases of patients with an incurable metastasized cancer; the most common types of cancers that bring about secondary tumors of the brain are lung cancer, breast cancer, malignant melanoma, kidney cancer, and colon cancer (in decreasing order of frequency). Secondary brain tumors are more common than primary ones; in the United States there are about 170,000 new cases every year. Secondary brain tumors are the most common cause of tumors in the intracranial cavity. The skull bone structure can also be subject to a neoplasm that by its very nature reduces the volume of the intracranial cavity, and can damage the brain.'
    },
    {
      id: '_15',
      title: 'INTRACRANIL INFECTION'
    },
    {
      id: '_16',
      title: 'Encephalitis is inflammation of the brain. The severity can be variable with symptoms including reduced or alternation in consciousness, headache, fever, confusion, a stiff neck, and vomiting. Complications may include seizures, hallucinations, trouble speaking, memory problems, and problems with hearing.Causes of encephalitis include viruses such as herpes simplex virus and rabies as well as bacteria, fungi, or parasites. Other causes include autoimmune diseases and certain medications. In many cases the cause remains unknown. Risk factors include a weak immune system.Diagnosis is typically based on symptoms and supported by blood tests, medical imaging, and analysis of cerebrospinal fluid.Certain types are preventable with vaccines. Treatment may include antiviral medications (such as acyclovir), anticonvulsants, and corticosteroids. Treatment generally takes place in hospital. Some people require artificial respiration. Once the immediate problem is under control, rehabilitation may be required. In 2015, encephalitis was estimated to have affected 4.3 million people and resulted in 150,000 deaths worldwide.'
    },
    {
      id: '_17',
      title: 'Brain abscess (or cerebral abscess) is an abscess caused by inflammation and collection of infected material, coming from local (ear infection, dental abscess, infection of paranasal sinuses, infection of the mastoid air cells of the temporal bone, epidural abscess) or remote (lung, heart, kidney etc.) infectious sources, within the brain tissue. The infection may also be introduced through a skull fracture following a head trauma or surgical procedures. Brain abscess is usually associated with congenital heart disease in young children. It may occur at any age but is most frequent in the third decade of life.'
    },
    {
      id: '_18',
      title: 'Rhino-orbital-cerebral-mucormycosis (ROCM), previously referred to as orbital zygomycosis, refers to the presentation of pathologic symptoms in the orbit as a result of fungal infections caused by fungi in the order Mucorales, most commonly by the species Rhizopus oryzae. ROCM usually occurs in an immunocompromised host and presents with initial symptoms such as vision loss, ptosis, diplopia, and external ophthalmoplegia. Left untreated, ROCM can progress to acute vision loss and death .'
    },
    {
      id: '_19',
      title: ''
    },
    {
      id: '_20',
      title: 'Brain abscess (or cerebral abscess) is an abscess caused by inflammation and collection of infected material, coming from local (ear infection, dental abscess, infection of paranasal sinuses, infection of the mastoid air cells of the temporal bone, epidural abscess) or remote (lung, heart, kidney etc.) infectious sources, within the brain tissue. The infection may also be introduced through a skull fracture following a head trauma or surgical procedures. Brain abscess is usually associated with congenital heart disease in young children. It may occur at any age but is most frequent in the third decade of life.'
    },
  ]
    

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  
});

export default App;