import { test } from '@playwright/test';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import {
  createArticleWithRequiredFields,
  createArticleWithTags,
} from '../../src/ui/actions/article/createArticleActions';

test.beforeEach(async ({ page }) => {
  const user = generateNewUserData();
  await signUpUser(page, user);
});

test('Create an article with required fields', async ({ page }) => {
  await createArticleWithRequiredFields(page);
});

test('Create an article with tags', async ({ page }) => {
  await createArticleWithTags(page);
});