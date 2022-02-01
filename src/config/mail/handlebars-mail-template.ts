import handlebars from 'handlebars';
import fs from 'fs/promises';

export interface ItemplateVariables {
    [keys: string]: string | number;
}

export interface IparseMailTemplate {
    file: string;
    variables: ItemplateVariables;
}

export class HandlebarsMailTemplate {
    static async parse({
        file,
        variables,
    }: IparseMailTemplate): Promise<string> {
        const templateFileContent = await fs.readFile(file, 'utf-8');
        const parseTemplate = handlebars.compile(templateFileContent);

        return parseTemplate(variables);
    }
}
