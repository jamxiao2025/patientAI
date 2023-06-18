
const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");

async function invokeOpenAI() {
  const configuration = new Configuration({
    apiKey: 'KEY',
  });
  const openai = new OpenAIApi(configuration);

  try {
    const prompt = "Listed below are all 18 identifiers under HIPAA, look through the given data file and replace any personal identifier with a xxxxx . Make sure to replace anything that can be seen as personally identifiable given an experts discretion. Remove any identifiable location, time, date, or action that can be tracked back to the patient. Remove hospital names, hospital visits that my be able to trach back to the patient. Remove relationships to the patient and family descriptions or composition. Remove all times and dates and remove when the data was retrieved. Remove any info related to trends that can be traced back to the patient. Remove any times and dates related to hospital visits and follow up appointments. Remove the retrieval date and time of the information. Given this patient data form:"
    const patientData = 'CAL HACKS PATIENT DATA REQUEST\n{retrieved 9am June 16, 2023}\nPatient Name: Peter Parker; Address: 20 Ingram Street, Forest Hills, Queens, New York 11375; Family Members: May Parker (aunt), Ben Parker (uncle, deceased); SSN: 123-21-3123\nDOB: August 10, 2001; Email address: peter.parker@mit.edu\nCertificate / License number: NY-234239 - 0425 - 234323; Health Plan and Provider: Stark Industries {reference: 010124}; Emergency Contact: May Parker, Phone: (212) 555-1234\nPatient Notes:\nPatient, Peter Parker, checked into the Cal Hacks Hospital on June 12th, 2023 presenting with complaints of fatigue, occasional dizziness, and unexplained muscle aches. Symptoms began approximately two weeks ago and have progressively worsened. The patient also reports occasional bouts of insomnia and difficulty concentrating. Patient has a history of mild asthma, well-controlled with an albuterol inhaler which has been diagnosed and treated at Stanford hospital on August 21st, 2021. Physical examinations yield stable vital signs but patient appeared fatigued but was alert and oriented. No obvious signs of trauma or distress. Neurological examination was unremarkable.\nInvestigations: Blood tests were ordered, including a complete blood count, metabolic panel, thyroid function tests, and vitamin levels.\nThe patient\'s symptoms are suggestive of Chronic Fatigue Syndrome (CFS), but further investigations are needed to rule out other potential causes such as hypothyroidism, anemia, or vitamin deficiencies. Patient advised to maintain good sleep hygiene, eat a balanced diet, and engage in moderate exercise. Follow-up appointment was scheduled for two weeks to review the results of the blood tests and assess the patient\'s response to the lifestyle modifications.\nAdditional Notes: Patient is a student at MIT, studying biophysics. He reports high levels of stress related to his academic workload. The patient was advised to seek counselling services at his university to help manage stress.\nSigned: Dr. Otto Octavius, MD; Date: June 18, 2023';

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: (prompt + patientData),
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Invoke the function
invokeOpenAI();

