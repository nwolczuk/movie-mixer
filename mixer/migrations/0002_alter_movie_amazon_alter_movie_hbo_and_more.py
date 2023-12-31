# Generated by Django 4.2.5 on 2023-09-10 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mixer', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='amazon',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='movie',
            name='hbo',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='movie',
            name='netflix',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='movie',
            name='player',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='movie',
            name='title',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
