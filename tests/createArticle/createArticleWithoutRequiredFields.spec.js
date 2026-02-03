import { test } from '@playwright/test';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { publishArticleWithoutRequiredFields } from '../../src/ui/actions/article/createArticleActions';

test.beforeEach(async ({ page }) => {
  const user = generateNewUserData();
  await signUpUser(page, user);
});

test('Creat an article without required fields', async ({ page }) => {
  await publishArticleWithoutRequiredFields(page);
});
