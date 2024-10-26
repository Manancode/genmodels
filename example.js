const { TypeScriptGenerator, JavaGenerator } = require('@asyncapi/modelina');

// Example JSON Schema input
const jsonSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
    email: { type: 'string', format: 'email' },
    addresses: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          street: { type: 'string' },
          city: { type: 'string' },
          country: { type: 'string' }
        }
      }
    }
  },
  required: ['name', 'email']
};

async function generateModels() {
  // Generate TypeScript models
  const tsGenerator = new TypeScriptGenerator();
  const tsModels = await tsGenerator.generate(jsonSchema);
  
  console.log('Generated TypeScript Model:');
  console.log(tsModels[0].result);
  
  // Generate Java models
  const javaGenerator = new JavaGenerator();
  const javaModels = await javaGenerator.generate(jsonSchema);
  
  console.log('\nGenerated Java Model:');
  console.log(javaModels[0].result);
}

// Run the generator
generateModels().catch(console.error);